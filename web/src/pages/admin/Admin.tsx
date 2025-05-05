import SummaryGrid from "@/components/SummaryGrid";
import LoanHistory from "@/components/LoanHistory";
import DashboardAreaChart from "@/components/DashboardAreaChart";
import DashboardBarChart from "@/components/DashboardBarChart";
import HighlightedCard from "@/components/HighlightedCard";

const Admin = () => {
    return (
        <div className="flex flex-col jusitfy-center gap-6 bg-blue">
            <div className="text-3xl font-bold text-green-600">
                    Dashboard
            </div>
            <div>
                <SummaryGrid rows={2} cols={4} />
            </div>
            <LoanHistory />
            <DashboardAreaChart />
            <DashboardBarChart 
                chartTitle="Total Outstanding Loans - Monthly"
                layerColor="#050ED6"
                chartColor="#0378E3"
                chartDataType={"one"}
            />

            <div className="flex items-center justify-between gap-28">
                <HighlightedCard 
                    heading="Rate of Recovery (Open, Fully Paid, Default Loans)"
                    content="Percentage of the due amount that is paid for all loans until today"
                    value={45}
                    cardColor="#F39C12"
                    layerColor="#69420875"
                />

                <HighlightedCard 
                    heading="Rate of Recovery (Open Loans)"
                    content="Percentage of the due amount that is paid for open loans until today"
                    value={35}
                    cardColor="#00A65A"
                    layerColor="#06332375"
                />
            </div>

            <DashboardBarChart 
                chartTitle="Total Repayments Collected - Weekly"
                layerColor="#AB1A10"
                chartColor="#A61B13"
                chartDataType={"two"}
            />
        </div>
    );
}

export default Admin;