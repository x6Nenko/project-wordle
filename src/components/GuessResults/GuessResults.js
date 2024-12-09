import React from 'react'
import Guess from '../Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

const GuessResults = ({ guesses }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess key={index} newGuess={guesses[index] || ''} />
      ))}
    </div>
  )
}

export default GuessResults