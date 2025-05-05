import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";

const formUserSchema = z.object({
  feedback: z.string().min(2, {
    message: "Feedback must be greater than 2 characters"
  }).max(200, {
    message: "Feedback must be less than 200 characters"
  })
});

const formOtherSchema = z.object({
  status: z.enum(["pending", "verified", "rejected", "approved"]),
});

type OptionsDialogProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionsOthersForm = ({ setOpen }: OptionsDialogProps) => {
  const form = useForm<z.infer<typeof formOtherSchema>>({
    resolver: zodResolver(formOtherSchema),
    defaultValues: {  
      status: "pending"
    }
  })  

  const onFormSubmit = (data: z.infer<typeof formOtherSchema>) => {
    console.log(data)
    setOpen(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8 "></form>
        <div>
          <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Update Loan Status</FormLabel>
                      <FormControl>
                          <Input className="py-5" placeholder="Fullname as it appear on bank account" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
          />
        </div>
      <div className="flex justify-end">
          <Button className="cursor-pointer bg-green-500 hover:bg-green-600 font-semibold" type="submit">Submit</Button>
      </div>
    </Form>
  )
}

const OptionsUserForm = ({ setOpen }: OptionsDialogProps) => {
  const form = useForm<z.infer<typeof formUserSchema>>({
    resolver: zodResolver(formUserSchema),
    defaultValues: {  
    feedback: ""
    }
  })

  const onFormSubmit = (data: z.infer<typeof formUserSchema>) => {
    console.log(data)
    setOpen(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8"></form>
        <div>
          <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Ask a question</FormLabel>
                      <FormControl>
                          <Input className="py-5" placeholder="Fullname as it appear on bank account" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
          />
        </div>
      <div className="flex justify-end">
          <Button className="cursor-pointer bg-green-500 hover:bg-green-600 font-semibold" type="submit">Submit</Button>
      </div>
    </Form>
  )
}

export {
  OptionsOthersForm,
  OptionsUserForm
}