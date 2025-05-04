import SummaryGrid from "@/components/SummaryGrid";
import LoanHistory from "../user/LoanHistory";

const Verifier = () => {
    return (
        <div className="flex flex-col jusitfy-center gap-6">
        <div className="text-3xl font-bold text-green-600">
                Dashboard
            </div>
            <div>
                <SummaryGrid rows={2} cols={4} />
            </div>
            <LoanHistory />
        </div>
    )
}

export default Verifier;