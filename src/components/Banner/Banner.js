import React from 'react'

const Banner = ({ result, triesAmount, answer }) => {
  if (result === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {triesAmount} guesses</strong>.
        </p>
      </div>
    )
  } 

  return (
    <div className="sad banner">
      <p>
        <strong>Sorry!</strong> The word was <strong>{answer}</strong>
      </p>
    </div>
  )
}

export default Banner