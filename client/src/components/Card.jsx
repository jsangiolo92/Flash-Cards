import React from 'react';
import CardFront from './CardFront.jsx';
import CardBack from './CardBack.jsx';

const Card = ({currentCard, showFront, deleteCard, flipCard, hideCard, updateCard}) => {
  return(
    <div>
      {showFront ? 
      <CardFront title={currentCard.title} flipCard={flipCard} hideCard={hideCard} /> : 
      <CardBack currentCard={currentCard} deleteCard={deleteCard} hideCard={hideCard} updateCard={updateCard}/>}
    </div>
  )
}


export default Card;