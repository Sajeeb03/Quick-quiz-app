import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CategoriesContext } from './Root';

const Statistics = () => {
    const data = useContext(CategoriesContext);
    return (
        <div className='w-full md:w-1/2 md:m-auto mt-5 md:mt-5'>
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

};

export default Statistics;