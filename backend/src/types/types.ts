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

const LoanFeedbackSchema = z.object({
    id: z.string(),
    feedback: z.string().min(5)
})

const SummaryQuerySchema = z.object({
    userType: z.enum(["verifier", "admin"])
})

type LoanRequestType = z.infer<typeof LoanRequestSchema>
type LoanQueryType = z.infer<typeof LoanQuerySchema>
type LoanFeedbackType = z.infer<typeof LoanFeedbackSchema>
type SummaryQueryType = z.infer<typeof SummaryQuerySchema>

export {
    LoanRequestSchema,
    LoanQuerySchema,
    LoanFeedbackSchema,
    SummaryQuerySchema,
    LoanRequestType,
    LoanQueryType,
    LoanFeedbackType,
    SummaryQueryType
}