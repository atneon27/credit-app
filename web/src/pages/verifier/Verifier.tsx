import SummaryGrid from "@/components/SummaryGrid";
import LoanHistory from "@/components/LoanHistory";
import DashboardAreaChart from "@/components/DashboardAreaChart";
import DashboardBarChart from "@/components/DashboardBarChart";

const Verifier = () => {
    return (
        <div className="flex flex-col gap-6 bg-blue">
            <div className="flex text-green-600 items-end">
                <div className="font-bold text-lg pr-1">
                    Dashboards &gt;
                </div>
                <div className="font-bold text-3xl">
                    Loans
                </div>
            </div>
            <div>
                <SummaryGrid rows={2} cols={3} />
            </div>
            <LoanHistory />
            <DashboardAreaChart />

            <DashboardBarChart 
                chartTitle="Total Outstanding Loans - Monthly"
                layerColor="#050ED6"
                chartColor="#0378E3"
            />

            <DashboardBarChart 
                chartTitle="Total Repayments Collected - Weekly"
                layerColor="#AB1A10"
                chartColor="#A61B13"
            />
        </div>
    );
}

export default Verifier;