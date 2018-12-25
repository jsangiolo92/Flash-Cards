import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFront: true
    }
  }

  render() {
    return(
      <div>
        Placeholder for Card component
      </div>
    )
  }
}

export default Card;