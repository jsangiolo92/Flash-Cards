import React from 'react';

const CardBack = ({currentCard, hideCard}) => {
  return(
    <div>
      <div>{currentCard.answer}</div>

      {currentCard.links.map( (link, index) =>
        <li key={index}>{link}</li>  
      )}
      
      <h5>{currentCard.author}</h5>
      <h5>{currentCard.subject}</h5>

      <br/>
      <button onClick={hideCard}>Click to Close</button>
    </div>
  )
}

export default CardBack;