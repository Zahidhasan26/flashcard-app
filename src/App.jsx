import React, { useState } from 'react';
import './App.css';

function App() {
  const flashcards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is the largest planet in the solar system?', answer: 'Jupiter' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(randomIndex);
    setIsFlipped(false); // Reset flip state when moving to the next card
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container">
      <h1>Flashcard App</h1>
      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p>{flashcards[currentCardIndex].question}</p>
          </div>
          <div className="flashcard-back">
            <p>{flashcards[currentCardIndex].answer}</p>
          </div>
        </div>
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default App;