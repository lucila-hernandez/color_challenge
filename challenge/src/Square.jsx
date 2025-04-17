import React, { useState } from 'react';
import generateRandomHexColor from './Randomcolor';

function Square() {
  const [colors] = useState([
    generateRandomHexColor(),  
    generateRandomHexColor(),
    generateRandomHexColor(),
  ]);

  console.log(colors);

  return (
    <div className="square-container">
      <div className="square" style={{ backgroundColor: colors[0] }}></div>
      <div className="square" style={{ backgroundColor: colors[1] }}></div>
      <div className="square" style={{ backgroundColor: colors[2] }}></div>
    </div>
  );
}

export default Square;
