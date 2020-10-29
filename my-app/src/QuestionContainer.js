import React, { useState, useEffect } from 'react';
import data from './data';

function QuestionContainer() {
       
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

    // const updateCurrentQuestion = ()=> {
    //     return setCurrentQuestion(currentQuestion = questions[counter])
    // }


    const [counter, setCounter] = useState(0);
    // const [currentQuestion, setCurrentQuestion] = useState(questions[counter]);

    // useEffect(() => {
    //     getQuestions()
    // }, [])

    return (
        <div className='QuestionContainer'>
            <h1>{questions[counter].question}</h1>
        </div>
    );
}

export default QuestionContainer;