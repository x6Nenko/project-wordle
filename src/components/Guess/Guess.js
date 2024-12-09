import React from 'react'
import { range } from '../../utils'

const Guess = ({ newGuess }) => {
  return (
    <p className="guess">
      {newGuess === "" ? (
        range(5).map((i) => (
          <span key={i} className="cell"></span>
        ))
      ) : (
        newGuess.split('').map((letter, i) => (
          <span key={i} className="cell">{letter}</span>
        ))
      )}
    </p>
  )
}

export default Guess