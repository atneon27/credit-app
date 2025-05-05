import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useNavbar } from "./NavbarProvider";
import { EllipsisVertical } from "lucide-react"
import { useState } from "react"
import { OptionsOthersForm, OptionsUserForm } from "./OptionsForm"


const OptionsDialog = () => {
  const { profile } = useNavbar();
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <EllipsisVertical className="h-4 w-4 stroke-gray-400 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {profile === "user" ? <OptionsUserForm setOpen={setOpen} /> : <OptionsOthersForm setOpen={setOpen} />}
      </DialogContent>
    </Dialog>
  )
}

export default OptionsDialog;
