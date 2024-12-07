// Import React and necessary libraries
import React, { useState } from 'react';
import './App.css'; // Create a CSS file for styling

const App = () => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [dateOptions, setDateOptions] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' });

  // Function to move the "No" button to a random position
  const moveNoButton = () => {
    const randomTop = Math.random() * 80; // Random top position between 0% and 80%
    const randomLeft = Math.random() * 80; // Random left position between 0% and 80%
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  // Function to handle the "Yes" button click
  const handleYesClick = () => {
    setShowQuestion(false);
    setDateOptions(true);
  };

  return (
    <div className="App">
      {showQuestion && (
        <div className="question-container">
          <h1>Welcome, Hemasri!</h1>
          <h2>Want to go on a date with me?</h2>
          <div className="buttons">
            <button className="yes-button" onClick={handleYesClick}>
              Yes
            </button>
            <button
              className="no-button"
              style={{ ...noButtonPosition, position: 'absolute' }}
              onMouseEnter={moveNoButton}
            >
              No
            </button>
          </div>
        </div>
      )}

      {dateOptions && (
        <div className="date-options">
          <h1>Pick a date option!</h1>
          <ul>
            <li>Option 1: Salsa class</li>
            <li>Option 2: Movie Night</li>
            <li>Option 3: Random spot</li>
            <li>Option 4: Good sunset</li>
            <li>choose option 1👉👈 </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
