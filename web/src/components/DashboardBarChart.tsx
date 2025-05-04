import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

type Props = {
    chartTitle: string;
    layerColor: string;
    chartColor: string;
}

const DashboardBarChart = ({ chartTitle, layerColor, chartColor }: Props) => {
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
            <div style={{ backgroundColor: layerColor }} className="p-1.5 rounded-full"></div>
            <div className='text-2xl font-semibold p-4'>
                {chartTitle}
            </div>
            <div className='p-4'>
                <ResponsiveContainer width={'100%'} height={400}>
                    <BarChart data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="loaned" fill={chartColor} />
                    </BarChart>    
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashboardBarChart;