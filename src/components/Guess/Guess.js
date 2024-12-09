import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

const Guess = ({ value, answer }) => {
  let checkedGuess;
  if (value) {
    checkedGuess = checkGuess(value, answer);
  }
  
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${value && checkedGuess[num].status}`}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess