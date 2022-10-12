import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { CategoriesContext } from './Root';

const Statistics = () => {
    const data = useContext(CategoriesContext);
    return (
        <div className='w-5/6 md:w-1/2 md:m-auto mt-5 md:mt-5'>
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#8884" strokeDasharray="5 6" />
                </BarChart>
            </ResponsiveContainer>
            <h1 className='text-xl md:text-3xl md:ml-2 md:ml-0 font-semibold text-center'>Fig: Number of total questions.</h1>
        </div>
    );

};

export default Statistics;