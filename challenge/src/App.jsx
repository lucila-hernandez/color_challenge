import React, { useState, useEffect } from 'react';
import CorrectMessage from './Correctmessage';
import ResetButton from './Resetbutton';
import generateRandomHexColor from './Randomcolor';


function App() {
  const [colors, setColors] = useState([]);
  const [message, setMessage] = useState('');
  const [targetColor, setTargetColor] = useState('');

  useEffect(function () {
    generateColors();
  }, []);

  function generateColors() {
    var newColors = [
      generateRandomHexColor(),
      generateRandomHexColor(),
      generateRandomHexColor()
    ];
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * 3)]);
    setMessage('');
  }  

  return (
  <div className="app-container">
    <div className="square-container">
      {colors.map(function (color, index) {
        return (
          <div
            key={index}
            className="square"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
    </div>

    <h2 style={{ marginTop: '20px' }}>{targetColor}</h2>

    <CorrectMessage message={message} />
    <ResetButton onClick={generateColors} />
  </div>

  );
}

export default App;
