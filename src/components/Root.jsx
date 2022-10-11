import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
export const CategoriesContext = createContext([]);
const Root = () => {
    const data = useLoaderData();
    return (
        <CategoriesContext.Provider value={data.data}>
            <Header />
            <Outlet />
        </CategoriesContext.Provider>
    );
};

export default Root;