import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
    const [correctAns, setCorrectAns] = useState(0);
    const details = useLoaderData();
    const { name, questions, total } = details.data;
    // console.log(details.data)

    return (
        <div className='container m-auto'>
            <h1 className='text-5xl font-bold text-center mt-2 font-serif'>{name} quiz</h1>
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
            <div className='bg-gray-300 rounded-lg border-2 border-cyan-800 p-7 mx-2 mb-2'>
                <h1 className='text-4xl font-bold text-center text-cyan-800'>You've got {correctAns} out of {total} questions right!</h1>
            </div>
        </div>
    );
};

export default Quiz;