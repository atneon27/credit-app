import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const DashboardAreaChart = () => {
    // static data for chart
    const loansReleasedMonthly = [
        { Month: 1, LoanedAmount: 120000 },
        { Month: 2, LoanedAmount: 95000 },
        { Month: 3, LoanedAmount: 134000 },
        { Month: 4, LoanedAmount: 110500 },
        { Month: 5, LoanedAmount: 160000 },
        { Month: 6, LoanedAmount: 175000 },
        { Month: 7, LoanedAmount: 148000 },
        { Month: 8, LoanedAmount: 190000 },
        { Month: 9, LoanedAmount: 142000 },
        { Month: 10, LoanedAmount: 165000 },
        { Month: 11, LoanedAmount: 153000 },
        { Month: 12, LoanedAmount: 170500 },
    ];

    return (
        <div className='flex flex-col bg-white rounded-md'>
            <div className='p-1.5 bg-green-400 rounded-full'></div>
            <div className='text-2xl font-semibold p-4'>
                Loans Released Monthly
            </div>
            <div className='p-4'>
                <ResponsiveContainer width={'100%'} height={400}>
                    <AreaChart
                        data={loansReleasedMonthly}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <XAxis dataKey="Month" stroke='black' />
                        <YAxis stroke='black'/>
                        <Area dataKey="LoanedAmount" stroke="#6B9908" fill="#6B9908" />
                        <Tooltip />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashboardAreaChart;