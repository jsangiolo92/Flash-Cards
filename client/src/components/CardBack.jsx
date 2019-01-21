import React from 'react';

const CardBack = ({currentCard, hideCard, updateCard}) => {
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
      <button onClick={updateCard}>Click to Edit</button>
    </div>
  )
}

export default CardBack;