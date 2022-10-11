import React, { useContext } from 'react';
import img from '../assets/creative-abstract-question-marks-blue-backdrop-with-mock-up-place-ask-solution-faq-concept-3d-rendering_670147-5805.jpg'
import Categories from './Categories';
import { CategoriesContext } from './Root';

const Home = () => {
    const categories = useContext(CategoriesContext);
    // console.log(categories);
    return (
        <div className='container m-auto relative'>
            <img className='w-full h-80 md:h-60' src={img} alt="" />
            <div className='absolute inset-0 w-full h-80 md:h-60 bg-black bg-opacity-75 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-cyan-400'>Test Your  Ability</h1>
                <p className='text-lg text-cyan-400 text-center px-8 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit error aperiam autem, quos molestiae ab aut quia optio cum voluptatibus fugit adipisci earum cupiditate accusantium similique alias sunt eos perspiciatis veniam reiciendis sint fuga?
                </p>
            </div>
            <div className='my-2 m-1 sm:mx-0 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2 lg:gap-8'>
                {
                    categories.map(category => <Categories key={category.id} category={category} />)
                }
            </div>
        </div>
    );
};

export default Home;