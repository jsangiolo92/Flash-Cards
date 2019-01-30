import React from 'react';

const CardFront = ({title, flipCard}) => {
  return(
    <div class="card-form">
      <h2 class="card-front" onClick={flipCard}>{title}</h2>
    </div>
  )
}

export default CardFront;