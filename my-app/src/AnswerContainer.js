import React, { useState, useEffect } from 'react';
import Answer from './Answer';

function AnswerContainer(props) {

    // console.log(props.answers)
//     let shuffledAnswers = props.incorrectAnswers.concat([props.correctAnswer]).sort()
//    console.log(shuffledAnswers)
   let checkAnswer = (selectedAnswer, correctAnswer) => {
    debugger
    

   }

    return (
        <div className='AnswerContainer'>
            {
                props.incorrectAnswers.concat([props.correctAnswer]).sort().map((answer, index) => (
                    <Answer key={index} answer={answer} onClick={()=>checkAnswer(answer, props.correctAnswer)}/>
                ))
            }
        </div>
    );
}

export default AnswerContainer;