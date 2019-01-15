import React from 'react';
import CardFront from './CardFront.jsx';
import CardBack from './CardBack.jsx';

const Card = ({currentCard, showFront, flipCard, hideCard}) => {
  return(
    <div>
      {showFront ? 
      <CardFront title={currentCard.title} flipCard={flipCard} hideCard={hideCard} /> : 
      <CardBack currentCard={currentCard} hideCard={hideCard} />}
    </div>
  )
}


export default Card;