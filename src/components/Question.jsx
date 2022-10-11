import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Swal from 'sweetalert2';

const Question = ({ questions, idx, correctAns, setCorrectAns }) => {

    const { question, id, correctAnswer, options } = questions
    const handleAnswer = ans => {
        if (ans === correctAnswer) {
            console.log('correct');
            Swal.fire('Correct Answer');
            setCorrectAns(correctAns + 1);
        }
        else {
            Swal.fire('Wrong Answer');
        }
    }
    const handleCorrectAns = () => {
        Swal.fire(`Correct ans is:
        ${correctAnswer}`);
    }
    // console.log(options)
    return (

        <div className='border-2 border-cyan-800 bg-gray-300 rounded-lg m-2 p-4 relative'>
            <h1 className='text-3xl font-bold mb-3'>Quiz {idx + 1}:{question}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-1 text-xl font-semibold'>
                {
                    options.map((option, idx) => <p key={idx} className={`bg-cyan-600 p-6 rounded-lg`} ><input type="radio" name='idx' onClick={() => handleAnswer(option)} /> {option}</p>)
                }
            </div>
            <EyeIcon onClick={handleCorrectAns} className='h-6 w-6 absolute top-1 right-3 mt-5'></EyeIcon>

        </div>
    );
};



export default Question;