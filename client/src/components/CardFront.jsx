import React from 'react';

const CardFront = ({title, flipCard}) => {
  return(
    <div>
      <h2 onClick={flipCard}>{title}</h2>
    </div>
  )
}

export default CardFront;