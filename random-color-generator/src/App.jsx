import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black"); // State to hold the current color
  const [isHexClicked, setIsHexClicked] = useState(false); // State to track which button was clicked

  const forHex = () => {
    setIsHexClicked(true);
  };

  const forRgb = () => {
    setIsHexClicked(false);
  };

  const getRandomHexColor = () => {
    let randomNumber = Math.floor(Math.random() * 16777215);
    return `#${randomNumber.toString(16).padStart(6, '0')}`;
  };

  const getRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const colorChange = () => {
    if (isHexClicked) {
      setColor(getRandomHexColor());
    } else {
      setColor(getRandomRgbColor());
    }
  };

  return (
    <> 
      <div className="main" style={{ backgroundColor: color }}>
        <div className="buttons">
          <button onClick={forRgb}>Create RGB Color</button>
          <button onClick={forHex}>Create HEX Color</button>
          <button onClick={colorChange}>Generate Random Color</button>
        </div>
        <h1>{color}</h1>
      </div>
    </>
  );
}

export default App;
