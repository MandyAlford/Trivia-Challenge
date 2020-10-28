import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import QuestionContainer from './QuestionContainer';
import spaceBackground from './imgs/space-background.jpg';

function App() {
  // const [score, setScore] = useState([])

  return (
    <div styles={{ backgroundImage: `url(${spaceBackground})` }}>
      <Header />
      <QuestionContainer />
    </div>
  );
}

export default App;
