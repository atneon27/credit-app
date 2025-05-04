import { Banknote, IndianRupee } from "lucide-react";
import LoanFormDialog from "./LoanFormDialog";

const UserCashInfo = () => {
    return (
        <div className="flex flex-row items-center justify-between gap-5 pt-10">
            <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg w-[75px] h-[75px] bg-green-500 flex items-center justify-center">
                    <Banknote className="h-11 w-11 stroke-1 stroke-white" />
                </div>
                <div className="flex flex-col justify-around items-start h-[75px]">
                    <div className="text-green-500 font-semibold text-sm">
                        Deficit
                    </div>
                    <div className="flex flex-row items-center">
                        <IndianRupee className="h-7 w-7 stroke-green-500" />
                        <span className="text-3xl text-green-500 font-bold">
                            0.0
                        </span>
                    </div>
                </div>
            </div>
            <LoanFormDialog />
        </div>
    )
}

export default UserCashInfo;