import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const DashboardAreaChart = () => {
    // dummy data
    const data = [{
        month: 1,
        loaned: 400, 
    }, { 
        month: 2,
        loaned: 500, 
    }, { 
        month: 3,
        loaned: 100, 
    }, { 
        month: 4,
        loaned: 600, 
    }]; 

    return (
        <div className='flex flex-col bg-white rounded-md'>
            <div className='p-1.5 bg-green-400 rounded-full'></div>
            <div className='text-2xl font-semibold p-4'>
                Loans Released Monthly
            </div>
            <div className='p-4'>
                <ResponsiveContainer width={'100%'} height={400}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <XAxis dataKey="month" stroke='black' />
                        <YAxis stroke='black'/>
                        <Area dataKey="loaned" stroke="#6B9908" fill="#6B9908" />
                        <Tooltip />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashboardAreaChart;