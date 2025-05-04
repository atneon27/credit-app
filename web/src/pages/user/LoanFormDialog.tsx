import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import LoanForm from "./LoanForm";

export function LoadFormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 text-white cursor-pointer focus:outline-none hover:bg-green-600">Get a Loan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[412px] md:max-w-[800px] lg:max-w-[1100px]">
        <LoanForm />
      </DialogContent>
    </Dialog>
  )
}

export default LoadFormDialog;