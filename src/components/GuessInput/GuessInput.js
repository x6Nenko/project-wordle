import React from 'react'

const GuessInput = () => {
  const [guess, setGuess] = React.useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted guess:', guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern='[A-Z]{5}' value={guess} onChange={(e) => setGuess((e.target.value).toUpperCase())} />
    </form>
  )
}

export default GuessInput