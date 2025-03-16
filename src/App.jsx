import React, { useState } from 'react';
import './App.css';

function App() {
  const initialFlashcards = [
    { question: 'He is a Saiyan from the planet Vegeta. He is known for his signature move, the Kamehameha. He has spiky black hair that turns golden when he transforms into a Super Saiyan.', answer: 'Goku' },
    { question: 'He dreams of becoming the Hokage of his village. He has a Nine-Tailed Fox sealed inside him. He is known for his catchphrase, "Believe it!" (Dattebayo).', answer: 'Naruto' },
    { question: 'He is the captain of the Straw Hat Pirates. He gained the ability to stretch his body after eating the Gum-Gum Fruit. He is on a quest to find the legendary treasure known as One Piece.', answer: 'Monkey D Luffy' },
    { question: 'He possesses the ability to transform into a Titan. He seeks revenge against the Titans for destroying his hometown. His catchphrase is "I will destroy the entire world."', answer: 'Eren Yeager' },
    { question: 'She is a magical girl who fights evil in the name of the Moon. She wields a magical brooch and a Moon Stick. She is known for her iconic phrase, "In the name of the Moon, I will punish you!"', answer: 'Sailor Moon' },
  ];

  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
    setFeedback('');
    setUserInput('');
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
    setFeedback('');
    setUserInput('');
  };

  const handleShuffle = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentCardIndex(0);
    setFeedback('');
    setUserInput('');
  };


  const handleSubmit = () => {
    const currentAnswer = flashcards[currentCardIndex].answer;
    // Direct string comparison for answer checking
    if (userInput.trim().toLowerCase() === currentAnswer.trim().toLowerCase()) {
      setFeedback('Correct Guess!');
      setStreak(streak + 1);
      if (streak + 1 > bestStreak) setBestStreak(streak + 1);
    } else {
      setFeedback(`Incorrect! The correct answer is: ${currentAnswer}`);
      setStreak(0);
    }
    setIsFlipped(true);
  };


  return (
    <div className="flashcard-container">
      <h1>Guess The Anime Character!</h1>
      <p>There will be some hints and you need to guess which Anime character it is.</p>
      <p>Total Flashcards: {flashcards.length}</p>
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

      <input
        type="text"
        placeholder="Enter your answer..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p className="feedback">{feedback}</p>}

      <div className="controls">
        <button onClick={handlePrevious}>Back</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleShuffle}>Shuffle</button>
      </div>

      <p>Current Streak: {streak} | Best Streak: {bestStreak}</p>
    </div>
  );
}

export default App;
