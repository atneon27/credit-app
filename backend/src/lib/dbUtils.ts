import prisma from "../lib/prisma.js";
import { LoanFeedbackSchema, LoanQuerySchema, LoanQueryType, LoanRequestType, LoanFeedbackType } from "../types/types";

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

export {
    getLoans,
    submitFeedback,
    submitForm
}