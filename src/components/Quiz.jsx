import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
    const [correctAns, setCorrectAns] = useState(0);
    const details = useLoaderData();
    const { name, questions } = details.data
    console.log(details.data.questions)
    return (
        <div className='container m-auto'>
            <h1 className='text-5xl font-bold text-center mt-2 font-serif'>{name} quiz</h1>
            {/* <img className='bg-black bg-opacity-75 rounded-xl' src={logo} alt="" /> */}
            <div className=''>
                {
                    questions.map((question, idx) => <Question
                        key={question.id} idx={idx}
                        questions={question}
                        correctAns={correctAns}
                        setCorrectAns={setCorrectAns}
                    />)
                }
            </div>
        </div>
    );
};

export default Quiz;