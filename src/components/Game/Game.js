import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('running');
  // won, lost, running

  function handleSubmitGuess(newGuess) {
    const checkedGuess = checkGuess(newGuess, answer);
    const isWinner = checkedGuess.every(
      (result) => result.status === 'correct'
    );
    
    if (isWinner) {
      setGameResult('won');
    }
    
    setGuesses([...guesses, newGuess]);

    if ((guesses.length + 1) >= NUM_OF_GUESSES_ALLOWED) {
      setGameResult('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} isDisabled={gameResult !== 'running'} />
      {gameResult !== 'running' && <Banner result={gameResult} triesAmount={guesses.length} answer={answer} />}
    </>
  );
}

export default Game;
