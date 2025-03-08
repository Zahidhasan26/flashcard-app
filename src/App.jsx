import React, { useState } from 'react';
import './App.css';

function App() {
  const flashcards = [
    { question: 'He is a Saiyan from the planet Vegeta.' +
       'He is known for his signature move, the Kamehameha.'+
       'He has spiky black hair that turns golden when he transforms into a Super Saiyan.', answer: 'Goku' },
    { question: 'He dreams of becoming the Hokage of his village.'+ 'He has a Nine-Tailed Fox sealed inside him.' + 'He is known for his catchphrase, Believe it! (Dattebayo!).', answer: 'Naruto' },
    { question: 'He is the captain of the Straw Hat Pirates. He gained the ability to stretch his body after eating the Gum-Gum Fruit. He is on a quest to find the legendary treasure known as One Piece.', answer: 'Monkey D Luffy' },
    { question: 'He possesses the ability to transform into a Titan. He seeks revenge against the Titans for destroying his hometown. His catchphrase is "I will destroy the entire world."', answer: 'Eren Yeager' },
    { question: 'She is a magical girl who fights evil in the name of the Moon. She wields a magical brooch and a Moon Stick. She is known for her iconic phrase, "In the name of the Moon, I will punish you!"', answer: 'SaiLOR Moon' },
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
      <h1>Guess The Anime Character!</h1>
      <p>There will be some hints and you need to guess which Anime character it is.</p>
      <p>Total Flashcards : 5</p>
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