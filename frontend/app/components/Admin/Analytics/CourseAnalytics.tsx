import { useGetMailsAnalyticsQuery } from '@/redux/features/analytics/analyticsApi';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const CourseAnalytics = () => {
    const {data, isLoading} = useGetMailsAnalyticsQuery({});
    const dataChart:any = []
    data && data?.mails.data.day?.forEach((item:any)=>{
        dataChart.push({name:item.date, count:item.count})
    })
    return (
        <div className='h-screen'>
            <div className='pt-[50px] h-full'>
                <h1 className='text-white text-[32px]'>Analytics Mail</h1>
                <div className='h-full mt-10'>
                <ResponsiveContainer width="80%" height="50%">
                    <AreaChart
                        width={100}
                        height={400}
                        data={dataChart}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
               
            </div>
        </div>

    );
};

export default CourseAnalytics;