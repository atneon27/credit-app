import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

type Props = {
    chartTitle: string;
    layerColor: string;
    chartColor: string;
    chartDataType: "one" | "two";
}

const DashboardBarChart = ({ chartTitle, layerColor, chartColor, chartDataType }: Props) => {
    let data;
    if(chartDataType === "one") {
        data = [
            { Month: 1,  Amount: 300000 },
            { Month: 2,  Amount: 310000 },
            { Month: 3,  Amount: 295000 },
            { Month: 4,  Amount: 320000 },
            { Month: 5,  Amount: 335000 },
            { Month: 6,  Amount: 345000 },
            { Month: 7,  Amount: 358000 },
            { Month: 8,  Amount: 370000 },
            { Month: 9,  Amount: 365000 },
            { Month: 10, Amount: 375000 },
            { Month: 11, Amount: 368000 },
            { Month: 12, Amount: 360000 },
        ];
    } else {
        data = [
            { Month: 1,  Amount: 60000 },
            { Month: 2,  Amount: 52000 },
            { Month: 3,  Amount: 73000 },
            { Month: 4,  Amount: 68000 },
            { Month: 5,  Amount: 71000 },
            { Month: 6,  Amount: 75500 },
            { Month: 7,  Amount: 80000 },
            { Month: 8,  Amount: 85000 },
            { Month: 9,  Amount: 79000 },
            { Month: 10, Amount: 82500 },
            { Month: 11, Amount: 87000 },
            { Month: 12, Amount: 90000 },
        ];
    }

    return (
        <div className='flex flex-col bg-white rounded-md'>
            <div style={{ backgroundColor: layerColor }} className="p-1.5 rounded-full"></div>
            <div className='text-2xl font-semibold p-4'>
                {chartTitle}
            </div>
            <div className='p-4'>
                <ResponsiveContainer width={'100%'} height={400}>
                    <BarChart data={data}>
                        <XAxis dataKey="Month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Amount" fill={chartColor} />
                    </BarChart>    
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashboardBarChart;