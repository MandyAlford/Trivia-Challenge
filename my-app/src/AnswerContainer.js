import React, { useState, useEffect } from 'react';

function AnswerContainer(props) {

    // console.log(props.answers)
    let shuffledAnswers = props.incorrectAnswers.concat([props.correctAnswer]).sort()
   console.log(shuffledAnswers)
   

    return (
        <div className='AnswerContainer'>
            <p>answers</p>
        </div>
    );
}

export default AnswerContainer;