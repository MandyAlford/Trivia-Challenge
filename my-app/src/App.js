import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import GameContainer from './GameContainer';
import spaceBackground from './imgs/space-background.jpg';

function App() {
  // const [score, setScore] = useState([])

  return (
    // style = {{ backgroundImage: 'url(' + require('./images/sword.png') + ')' }
// }
    <div styles={{ backgroundImage: `url( ${spaceBackground})` }}>
      <Header />
      <GameContainer />
    </div>
  );
}

export default App;
