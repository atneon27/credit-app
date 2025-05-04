import { Funnel, SortDesc } from "lucide-react";
import LoanList from "./LoanList";

const LoanHistory = () => {
    return (
        <div className="w-full">
            <div className="bg-white px-4 py-5">
                <div className="flex flex-row justify-between items-center pb-3">
                    <div className="text-lg font-semibold pl-2">
                        Applied Loans
                    </div>
                    <div className="flex gap-2 pr-2">
                        <div className="flex gap-1 text-sm">
                            <SortDesc className="h-4 w-4 fill-gray-400 stroke-gray-400" />
                            Sort
                        </div>
                        <div className="flex gap-1 text-sm">
                            <Funnel className="h-4 w-4 fill-gray-400 stroke-gray-400" />
                            Filter
                        </div>
                    </div>
                </div>
                <LoanList />
            </div>
        </div>
    )
}

export default LoanHistory;