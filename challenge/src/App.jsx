import React, { useState, useEffect } from 'react';
import CorrectMessage from './Correctmessage';
import ResetButton from './Resetbutton';
import generateRandomHexColor from './Randomcolor';

function App() {
  const [colors, setColors] = useState([]);
  const [message, setMessage] = useState('');
  const [targetColor, setTargetColor] = useState('');

  useEffect(() => {
    generateColors();
  }, []);

  function generateColors() {
    const newColors = [
      generateRandomHexColor(),
      generateRandomHexColor(),
      generateRandomHexColor()
    ];
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * 3)]);
    setMessage(''); 
  }

  function handleSwatchClick(color) {
    if (color === targetColor) {
      setMessage('Correct');
    } else {
      setMessage('Incorrect');
    }
  }

  return (
    <div className="app-container">
      <div className="square-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className="square"
            style={{ backgroundColor: color }}
            onClick={() => handleSwatchClick(color)}
          ></div>
        ))}
      </div>

      <h2 style={{ marginTop: '20px' }}>{targetColor}</h2>

      <CorrectMessage message={message} />
      <ResetButton onClick={generateColors} />
    </div>
  );
}

export default App;
