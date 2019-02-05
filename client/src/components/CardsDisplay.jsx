import React from 'react';

const CardsDisplay = ({cards, cardClick}) => {
  return(
    <div class="card-container">
      {cards.map( (card, index) => 
        <div class="card-preview" key={index} onClick={() => {cardClick(card)}}>{card.title}</div>
      )}
    </div>
  )
}

export default CardsDisplay;