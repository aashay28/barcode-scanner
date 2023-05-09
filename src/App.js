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
      {!showScanner && (
        <button onClick={handleStartButtonClick}>Start Scanner</button>
      )}
      {showScanner && <Scanner />}
    </div>
  );
};

export default App;
