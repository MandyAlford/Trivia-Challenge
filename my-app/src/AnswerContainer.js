import React  from 'react';
import Answer from './Answer';

function AnswerContainer(props) {
   let checkAnswer = (selectedAnswer, correctAnswer) => {
    if(selectedAnswer === correctAnswer){
        return true
    }
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