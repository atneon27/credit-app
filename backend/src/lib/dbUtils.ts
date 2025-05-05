import { count } from "console";
import prisma from "../lib/prisma.js";
import { LoanFeedbackSchema, LoanQuerySchema, LoanQueryType, LoanRequestType, LoanFeedbackType, SummaryQueryType } from "../types/types";

const getLoans = async (data: LoanQueryType) => {
    let loans;

    if(data.id) {
        loans = await prisma.loan.findUnique({
            where: {
                id:data.id
            }, 
            select: {
                id: true,
                user: {
                    select: {
                        name: true
                    }
                },
                officer: {
                    select: {
                        name: true
                    }
                },
                loanAmount: true,
                loanTenure: true,
                reason: true,
                employmentStatus: true,
                employmentAddress: true,
                currentStatus: true,
                createdAt: true
            }
        });
    } else if(data.userType) {
        if(data.userType === "user") {
            loans = await prisma.loan.findMany({
                select: {
                    id: true,
                    officer: {
                        select: {
                            name: true
                        }
                    },
                    loanAmount: true,
                    currentStatus: true,
                    createdAt: true
                }
            });
        } else if(data.userType === "verifier" || data.userType === "admin") {
            loans = await prisma.loan.findMany({
                select: {
                    id: true,
                    user: {
                        select: {
                            name: true
                        }
                    },
                    loanAmount: true,
                    currentStatus: true,
                    createdAt: true,
                    feedback: true,
                    feedbackRaisedAt: true
                }
            });
        }
    } 

    return loans;
}

const submitFeedback = async (data: LoanFeedbackType) => {
    try {
        const loan = await prisma.loan.update({
            where: {
                id: data.id
            }, 
            data: {
                feedback: data.feedback,
                feedbackRaisedAt: new Date()
            }
        })

        return loan.id;
    } catch(err) {
        throw new Error("Error occured while updating loan feedback");
    }
}

const submitForm = async (data: LoanRequestType) => {
    const user = await prisma.user.upsert({
        where: {
            name: data.name
        }, 
        update: {
            name: data.name
        },
        create: {
            name: data.name
        }
    });

    const officer = await prisma.officer.upsert({
        where: {
            name: "John Okoh"
        }, 
        update: {
            name: "John Okoh"
        },
        create: {
            name: "John Okoh"
        }
    });

    const loan = await prisma.loan.create({
        data: {
            userId: user.id,
            officerId: officer.id,
            loanTenure: data.loanTenure,
            loanAmount: data.loanAmount,
            reason: data.reason,
            employmentStatus: data.employmentStatus,
            employmentAddress: data.employmentAddress,
        }
    });

    return loan.id;
}

type SummaryType = {
    text: string;
    value: number;
    iconType: number
}

const getSummary = async (data: SummaryQueryType) => {
    const countUsers = await prisma.user.count();
    const countOfficers = await prisma.officer.count();
    const countLoans = await prisma.loan.count();

    const totalAmount = await prisma.loan.aggregate({
        _sum: {
            loanAmount: true
        }
    });

    const totalAmt = totalAmount._sum.loanAmount;
    const savings = Math.floor(totalAmt ?? 0 * 0.2)
    const cashRecived = Math.floor(totalAmt ?? 0 * 0.6)

    const result: SummaryType[] = [
        {
            text: "Active Users",
            value: countUsers + countOfficers,
            iconType: 1
        }, 
        {
            text: "Borrowers",
            value: countUsers,
            iconType: 2
        },
        {
            text: "Loans",
            value: countLoans,
            iconType: 3
        },
        {
            text: "Cash Dispersed",
            value: totalAmt ?? 0,
            iconType: 4
        }, 
        {
            text: "Savings",
            value: savings,
            iconType: 5
        }, 
        {
            text: "Cash Recived",
            value: cashRecived,
            iconType: 6
        }, 
        {
            text: "Repaid Loans", 
            value: 10,
            iconType: 7
        }, 
        {
            text: "Other Accounts",
            value: 10,
            iconType: 8
        },
    ]

    if(data.userType === "verifier") {
        return result.slice(1, result.length - 1);
    } 

    return result;
}

export {
    getLoans,
    submitFeedback,
    submitForm,
    getSummary
}