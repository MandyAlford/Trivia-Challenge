import React, { useState } from 'react';
import data from './data';

function QuestionContainer() {

    const getQuestions = () => {
        let result = []
        
        while(result.length < 10) {
            let index = Math.floor(Math.random() * data.length)

            if(!result.includes(index)) {
                result.push(index)
            }
        }
        return result.map(index => {
            return data[index]
        })
    }

    return (
        <div className='QuestionContainer'>
            <h1>First Question</h1>
        </div>
    );
}

export default QuestionContainer;