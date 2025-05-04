import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
    fullname: z.string().min(2, {
        message: "Name must at least contain you intials"
    }).max(50, {
        message: "Name must be less than 50 characters"
    }),
    loan_tenure: z.number().min(1, {
        message: "Loan Tenure must be greater than 0"
    }).max(100, {
        message: "Loan Tenure must be less than 100"
    }),
    reason: z.string().min(20, {
        message: "A Valid Reason must be greater than 20 characters"
    }),
    loan_amount: z.number().min(10000, {
        message: "Loan Amount must be greater than 10000"
    }).max(1000000, {
        message: "Loan Amount must be less than 1000000"
    }),
    employment_status: z.string().min(2, {
        message: "Employment Status must be greater than 2 characters"
    }).max(50, {
        message: "Employment Status must be lesss than 50 characters"
    }),
    employment_address: z.string().min(2, {
        message: "Employment Address must be greater than 2 characters"
    }).max(150, {
        message: "Employment Address must be less than 150 characters"
    }),
    conditionOne: z.boolean({
        message: "Not marked, mark to proceed"
    }),
    conditionTwo: z.boolean({
        message: "Not marked, mark to proceed"
    }),
})

const LoanForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            loan_tenure: 0,
            reason: "",
            loan_amount: 0,
            employment_status: "",
            employment_address: ""
        }
    })

    const onFormSubmit = (data: z.infer<typeof formSchema>) => {    
        console.log(data);
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8">
            <div className="flex flex-row gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fullname as it appear on bank account</FormLabel>
                                <FormControl>
                                    <Input className="py-5" placeholder="Fullname as it appear on bank account" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="loan_tenure"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Loan Tenure (in months)</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="number" 
                                        className="py-5" 
                                        placeholder="Loan Tenure (in months)" 
                                        onChange={(e) => {
                                            const numericValue = parseFloat(e.target.value);
                                            field.onChange(isNaN(numericValue) ? undefined : numericValue);
                                        }} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Reason for Loan</FormLabel>
                                <FormControl>
                                    <Textarea className="py-5 min-h-32" placeholder="Reason for Loan" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <FormField
                        control={form.control}
                        name="loan_amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How much do you need?</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="number" 
                                        className="py-5" 
                                        placeholder="Loan Tenure (in months)" 
                                        onChange={(e) => {
                                            const numericValue = parseFloat(e.target.value);
                                            field.onChange(isNaN(numericValue) ? undefined : numericValue);
                                        }} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="employment_status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Employment Status</FormLabel>
                                <FormControl>
                                    <Input className="py-5" placeholder="Employment Status" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="employment_address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Employment Address</FormLabel>
                                <FormControl>
                                    <Input className="py-5" placeholder="Employment Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            <div className="flex flex-row gap-4 w-full">
                <FormField
                    control={form.control}
                    name="conditionOne"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start w-full">
                        <FormControl>
                            <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="rounded-full data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel>
                                <div className="text-wrap">
                                    I have read the important information and accept that by completing the application I will be bound by the terms
                                </div>
                            </FormLabel>
                        </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="conditionTwo"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start w-full">
                        <FormControl>
                            <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="rounded-full data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel>
                            Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.
                            </FormLabel>
                        </div>
                        </FormItem>
                    )}
                />
            </div>

            <div className="flex justify-end">
                <Button className="cursor-pointer bg-green-1050 hover:bg-green-2000 font-semibold" type="submit">Submit</Button>
            </div>
        </form>
        </Form>
    )
}   

export default LoanForm;