import { z } from 'zod';

const LoanRequestSchema = z.object({
    name: z.string(),
    loanTenure: z.number(),
    loanAmount: z.number(),
    reason: z.string(),
    employmentStatus: z.string(),
    employmentAddress: z.string()
})

const LoanQuerySchema = z.object({
    userType: z.optional(z.enum(["user", "verifier", "admin"])),
    id: z.optional(z.string())
})

type LoanRequestType = z.infer<typeof LoanRequestSchema>
type LoanQueryType = z.infer<typeof LoanQuerySchema>

export {
    LoanRequestSchema,
    LoanQuerySchema,
    LoanRequestType,
    LoanQueryType
}