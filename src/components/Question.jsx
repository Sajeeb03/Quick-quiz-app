import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Question = ({ questions, idx, correctAns, setCorrectAns }) => {

    const { question, correctAnswer, options } = questions
    const handleAnswer = ans => {
        if (ans === correctAnswer) {
            // Swal.fire('Correct Answer');
            toast.success('Correct answer', { autoClose: 500, position: 'top-center' })
            setCorrectAns(correctAns + 1);
        }
        else {
            toast.warn('Wrong Answer', { autoClose: 500, position: 'top-center' })
        }
    }
    const handleCorrectAns = () => {
        Swal.fire(`Correct ans is:
        ${correctAnswer}`);
    }

    const questionR = question.replace('<p>', '')
    return (

        <>
            <div className='border-2 border-cyan-800 bg-gray-300 rounded-lg m-2 p-4 relative'>
                <h1 className='text-3xl font-bold mb-3'>Quiz {idx + 1}: {questionR.replace('</p>', '')}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-1 text-xl font-semibold'>
                    {
                        options.map((option, index) => <div key={index} className='bg-cyan-600 p-6 rounded-lg'>
                            <input type="radio" value={`group-${idx}`} name={idx} onClick={() => handleAnswer(option)} /><label> {option}</label>
                        </div >)
                    }
                </div>
                <EyeIcon onClick={handleCorrectAns} className='h-6 w-6 absolute top-1 right-3 mt-5'></EyeIcon>
            </div>
            <ToastContainer />
        </>

    );
};



export default Question;