import React from 'react';

function Answer(props) {

    return (
        <div className='Answer' onClick={props.onClick}>
            <ul>{props.answer}</ul>
        </div>
    );
}

export default Answer;