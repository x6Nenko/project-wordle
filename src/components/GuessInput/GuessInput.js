import React from 'react'

const GuessInput = ({ handleSubmitGuess }) => {
  const [guess, setGuess] = React.useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    
    console.log('Submitted guess:', guess);
    handleSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        required
        minLength={5}
        maxLength={5}
        pattern='[A-Z]{5}' 
        title="5 letter word" 
        value={guess} 
        onChange={(e) => setGuess((e.target.value).toUpperCase())} />
    </form>
  )
}

export default GuessInput