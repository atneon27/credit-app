import express, { Router, Request, Response, response } from 'express';
import { LoanQuerySchema, LoanRequestSchema, LoanFeedbackSchema, LoanQueryType, LoanRequestType, LoanFeedbackType, SummaryQuerySchema, SummaryQueryType } from '../types/types.js';
import { getLoans, submitFeedback, submitForm, getSummary } from '../lib/dbUtils.js';

const router = Router();

router.get('/', async (req: Request<{}, {}, LoanQueryType>, res: Response) => {
    // fetches all the loan if no id query is provided 
    // fetches a single loan if the laonId query is provided
    const parseResult = LoanQuerySchema.safeParse(req.query);

    if(!parseResult.success) {
        res.status(400).json({
            error: "Invalid Query Parameter Used",
            detail: parseResult.error.issues
        })
        return;
    }

    const query: LoanQueryType = parseResult.data;

    try {
        if(query.id && query.userType) {
            throw new Error("must provide either id or userType not both");
        } else if(query.id) {
            const loan = await getLoans({
                id: query.id
            });

            res.status(200).json({
                loan: loan
            });
            return;
        } else if(query.userType) {
            const loans = await getLoans({
                userType: query.userType
            });

            res.status(200).json({
                loans: loans
            });
            return;
        }
    } catch(err) {
        res.status(500).json({
            error: "Internal Server Error",
            detail: err
        });
    }
});

router.get('/dashboard-summary', async (req, res) => {
    const parseResult = SummaryQuerySchema.safeParse(req.query);

    if(!parseResult.success) {
        res.status(400).json({
            error: "Invalid Query Parameter Used",
            detail: parseResult.error.issues
        })
        return;
    }

    const query: SummaryQueryType = parseResult.data;

    try {
        const data = await getSummary({
            userType: query.userType
        });

        res.status(200).json({
            summary: data
        });
        return;
    } catch(err) {
        res.status(500).json({
            error: "Internal Server Error",
            detail: err
        });
    }
})

router.put('/feedback', express.json(), async (req: Request, res: Response) => {
    // submit feedback
    const parseResult = LoanFeedbackSchema.safeParse(req.body);

    if(!parseResult.success) {
        res.status(400).json({
            error: "Invalid Request Body",
            detail: parseResult.error.issues
        })
        return;
    }

    const parsedBody: LoanFeedbackType = parseResult.data;

    try {
        const id = await submitFeedback(parsedBody);

        res.status(200).json({
            msg: "Feedback Submitted Successfully",
            id:id 
        })
    } catch(err) {
        res.status(500).json({
            error: "Internal Server Error",
            detail: err
        })
    }
});

router.post('/new-form', express.json(), async (req: Request<{}, {}, unknown>, res: Response) => {
    // submit a new form
    const parseResult = LoanRequestSchema.safeParse(req.body);

    if(!parseResult.success) {
        res.status(400).json({
            error: "Invalid Request Body",
            detail: parseResult.error.issues
        })
        return;
    }

    const parsedBody: LoanRequestType = parseResult.data;

    try {
        const id = await submitForm(parsedBody);

        res.status(200).json({
            msg: "Form Submitted Successfully",
            id:id 
        })
    } catch(err) {
        res.status(500).json({
            error: "Internal Server Error",
        })
    }
});

export default router;