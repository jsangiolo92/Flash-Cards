import React from 'react';
import CardFront from './CardFront.jsx';
import CardBack from './CardBack.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFront: true
    }

    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    this.setState({showFront: !this.state.showFront});
  }

  render() {
    return(
      <div>
        {this.state.showFront ? 
        <CardFront title={this.props.currentCard.title} hideCard={this.props.hideCard} flipCard={this.flipCard}/> : 
        <CardBack hideCard={this.props.hideCard} />}
      </div>
    )
  }
}

export default Card;