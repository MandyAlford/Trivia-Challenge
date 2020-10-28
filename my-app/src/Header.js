import React, { useState } from 'react';
import Score from './Score';
import './header.css'

function Header() {

    return (
        <div className='Header'>
            <h1>Trivia Time</h1>
            <Score />
        </div>
    );
}

export default Header;