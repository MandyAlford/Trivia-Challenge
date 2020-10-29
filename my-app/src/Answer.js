import React, { useState, useEffect } from 'react';

function Answer(props) {

    // console.log(props.answers)
    // let shuffledAnswers = props.incorrectAnswers.concat([props.correctAnswer]).sort()
    // console.log(shuffledAnswers)


    return (
        <div className='Answer' onClick={props.onClick}>
            <ul>{props.answer}</ul>
        </div>
    );
}

export default Answer;