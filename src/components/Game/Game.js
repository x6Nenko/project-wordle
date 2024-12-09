import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
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
  const [gameStatus, setGameStatus] = React.useState('running');
  // won, lost, running

  function handleSubmitGuess(newGuess) {    
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (newGuess === answer) {
      setGameStatus('won');
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} isDisabled={gameStatus !== 'running'} />
      {gameStatus !== 'running' && <Banner result={gameStatus} triesAmount={guesses.length} answer={answer} />}
    </>
  );
}

export default Game;
