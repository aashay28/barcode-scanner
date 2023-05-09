import './App.css';
import React, { useState } from 'react';
import Scanner from './Scanner';

const App = () => {
  const [showScanner, setShowScanner] = useState(false);

  const handleStartButtonClick = () => {
    setShowScanner(true);
  };

  return (
    <div>
      <div class='toolbar' role='banner'>
        <h3>Barcode Scanner</h3>
        <div class='spacer'></div>
      </div>

      <div class='content' role='main'>
        <input type='hidden' />
        {!showScanner && (
          <button className='start-camera-btn' onClick={handleStartButtonClick}>
            Start Scanner
          </button>
        )}
        {showScanner && <Scanner />}

        <br />
      </div>
    </div>
  );
};

export default App;
