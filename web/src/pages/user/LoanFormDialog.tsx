import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LoanForm from "./LoanForm";

export function LoadFormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-2000 text-white cursor-pointer focus:outline-none hover:bg-green-2000">Get a Loan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Apply for a Loan</DialogTitle>
        </DialogHeader>
        <LoanForm />
      </DialogContent>
    </Dialog>
  )
}

export default LoadFormDialog;