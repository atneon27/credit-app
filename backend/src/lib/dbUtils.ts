import prisma from "../lib/prisma.js";
import { LoanQuerySchema, LoanQueryType, LoanRequestType } from "../types/types";

const getLoans = async ({ userType, id }: LoanQueryType) => {
    let loans;

    if(id !== undefined) {
        loans = await prisma.loan.findUnique({
            where: {
                id:id 
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
    } else if(userType !== undefined) {
        if(userType === "user") {
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
        } else if(userType === "verifier" || userType === "admin") {
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
                    query: true,
                    queryRaisedAt: true
                }
            });
        }
    } 
    
    return loans;
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
    submitForm
}