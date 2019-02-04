import React from 'react';

const CardBack = ({currentCard, deleteCard, hideCard, updateCard}) => {
  return(
    <div class="card-form">
      <div class="card-info">{currentCard.answer}</div>

      <ul class="card-info">
        {currentCard.links.map( (link, index) =>
          <li key={index}>{link}</li>  
        )}
      </ul>
      
      <div class="card-footer">{currentCard.author}</div>
      <div class="card-footer">{currentCard.subject}</div>

      <br/>
      <button class="card-button" onClick={hideCard}>Click to Close</button>
      <button class="card-button" onClick={updateCard}>Click to Edit</button>
      <button class="card-button" onClick={deleteCard}>Click to Delete</button>
    </div>
  )
}

export default CardBack;