import React, { useState } from 'react';
import data from './data';
import AnswerContainer from './AnswerContainer';

function GameContainer() {
       
    function getQuestions() {
        let result = [];

        while (result.length < 10) {
            let index = Math.floor(Math.random() * data.length);

            if (!result.includes(index)) {
                result.push(index);
            }
        }
        let questionsData = result.map(index => {
            return data[index];
        });
        return questionsData;
    }

    const [questions, setQuestionBank] = useState(getQuestions());

    const [counter, setCounter] = useState(0);

    return (
        <div className='GameContainer'>
            <h1>{questions[counter].question}</h1>
            <AnswerContainer incorrectAnswers={questions[counter].incorrect} correctAnswer={questions[counter].correct}/>
        </div>
    );
}

export default GameContainer;