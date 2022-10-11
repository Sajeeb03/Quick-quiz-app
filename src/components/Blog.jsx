import React from 'react';

const Blog = () => {
    return (
        <div className='container m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 my-1 md:my-3'>
            <div className='bg-gray-800 text-white p-4 rounded-lg m-1'>
                <h1 className='text-4xl font-bold'>What is the purpose of React Router?</h1>
                <p className='text-lg mt-3'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. It basically helps to create single page applications.</p>
            </div>
            <div className='bg-gray-800 text-white p-4 rounded-lg m-1'>
                <h1 className='text-4xl font-bold'>How does context API work?</h1>
                <p className='text-lg mt-3'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='bg-gray-800 text-white p-4 rounded-lg m-1'>
                <h1 className='text-4xl font-bold'>How useHref hook works</h1>
                <p className='text-lg mt-3'>useHref - The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. useResolvedPath - This hook resolves the pathname of the location in the given to value against the pathname of the current location. This is useful when building links from relative values.</p>
            </div>

        </div>
    );
};

export default Blog;