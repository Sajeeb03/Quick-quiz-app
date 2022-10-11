import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {
    const { name, logo, id } = category;
    return (
        <div className="p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            </div>
            <Link to={`/quiz/${id}`}>
                <button className='bg-cyan-900 rounded px-6 py-3 text-lg font-semibold'>Try Now</button>
            </Link>
        </div>
    );
};

export default Categories;