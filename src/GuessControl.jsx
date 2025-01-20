// import React, { Component, useState } from "react";
import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  //function to handle the input change
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    //updates the current guess state with the value entered by the user
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    //calls the onGuess function from the props and passes the current guess
    onGuess(Number(currentGuess));
    //resets the current guess state to an empty string
    setCurrentGuess("");
  };

  //renders the input field and submit button for the user to guess a number
  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
