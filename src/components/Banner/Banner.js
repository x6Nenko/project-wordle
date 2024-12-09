import React from 'react'

const Banner = ({ result, triesAmount, answer }) => {
  // Solution provides better approach, where we use the banner as a wrapper component
  // and then add two more components: SuccessBanner and FailureBanner
  // so its more of "react" approach using reusable components
  // current banner is more like a template rather than a component

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