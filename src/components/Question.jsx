import React from 'react';
import { toast } from 'react-toastify';

const Question = ({ questions, idx }) => {
    const { question, id, correctAnswer, options } = questions
    const handleAnswer = ans => {
        if (ans === correctAnswer) {
            toast.success('Correct answer', { autoClose: 500 });
            console.log('correct');
        }
        else {
            console.log('incorrect');
        }
    }
    // console.log(options)
    return (
        <div className='border-2 border-cyan-800 bg-gray-300 rounded-lg m-2 p-4'>
            <h1 className='text-3xl font-bold mb-3'>Quiz {idx + 1}:{question}</h1>
            <div className='grid grid-cols-2 gap-2 mt-1 text-xl font-semibold'>
                {
                    options.map((option, idx) => <p onClick={() => handleAnswer(option)} key={idx} className={`bg-cyan-600 p-6 rounded-lg`} > {idx + 1}. {option}</p>)
                }
            </div>
        </div >
    );
};

export default Question;