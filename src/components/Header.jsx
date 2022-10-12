import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/4553013.png'

const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            <header className="p-4 bg-gray-800 text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link rel="noopener noreferrer" to='/' aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='h-6 w-6' src={img} alt="" />
                        <h1 className='text-2xl font-semibold text-cyan-400'>uick-Quiz</h1>
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='/home' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</Link>
                        </li>

                        <li className="flex">
                            <Link rel="noopener noreferrer" to='/statistics' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Statistics</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='/blogs' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blogs</Link>
                        </li>
                    </ul>
                    <button onClick={() => setMenu(!menu)} className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    {
                        menu && (
                            <div className='absolute top-14 left-0 z-10 mt-3 h-30 w-full bg-gray-800 text-cyan-500'>
                                <ul className="items-stretch ml-5 p-2 md:hidden">
                                    <li onClick={() => setMenu(!menu)}>
                                        <Link rel="noopener noreferrer" to='/home'>Home</Link>
                                    </li>
                                    <li onClick={() => setMenu(!menu)}>
                                        <Link rel="noopener noreferrer" to='/statistics'>Statistics</Link>
                                    </li>
                                    <li onClick={() => setMenu(!menu)}>
                                        <Link rel="noopener noreferrer" to='/blogs'>Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        )

                    }

                </div>
            </header>

        </div>
    );
};

export default Header;