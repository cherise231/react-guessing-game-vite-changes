// import React, { Component, useState } from "react";
import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

const NumberGuessingGame = () => {
  //function to handle the input change and submit the guess to the parent component

  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  //function to handle the guess input and update the state with the latest guess
  const handleGuess = (guess) => {
    //converts the guess to a number and sets it as the latest guess state
    setLatestGuess(Number(guess));
    //increments the number of guesses state by 1
    setNumberOfGuesses((numberOfGuesses) => numberOfGuesses + 1);
  };

  //function to reset the game
  const handleReset = () => {
    //sets the number to guess state to a new random number
    setNumberToGuess(getRandomNumber());
    //resets the number of guesses state to 0
    setNumberOfGuesses(0);
    //resets the latest guess state to null to clear the previous guess
    setLatestGuess(null);
  };

  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && <GameOver hasWon={isCorrectGuess} onReset={handleReset} />}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
};

export default NumberGuessingGame;

