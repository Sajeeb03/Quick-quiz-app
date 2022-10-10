import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <FaceFrownIcon className='h-20 w-20 text-yellow-500'></FaceFrownIcon>
            <h3 className='text-4xl font-bold text-yellow-600'>Error!</h3>
            <p className='text-3xl font-bold'><span className='text-yellow-600'>404</span> Page Not Found</p>
            <Link to="/home"><button className='bg-yellow-500 rounded-full px-5 py-3 text-lg mt-3 font-semibold'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;