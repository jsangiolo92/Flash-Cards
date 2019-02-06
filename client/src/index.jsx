import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.jsx';
import CardsDisplay from './components/CardsDisplay.jsx';
import CardForm from './components/CardForm.jsx';
import Menus from './components/Menus.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      showCard: false,
      showFront: true, 
      categories: [],
      currentCategory: '',
      cards: [],
      currentCard: {},
      cardType: ''
    }

    this.toggleForm = this.toggleForm.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.hideCard = this.hideCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.cardClick = this.cardClick.bind(this);
    this.subjectClick = this.subjectClick.bind(this);
  }

  componentDidMount() {
    this.getCategories()
  }

  toggleForm(cardType) {
    if (cardType === 'new') this.setState({currentCard: {}, showForm: !this.state.showForm, cardType: cardType});
    else this.setState({showForm: !this.state.showForm, cardType: cardType});
  }

  deleteCard() {
    axios.delete('/cards', {data: {id: this.state.currentCard._id}})
    .then( (response) => {
      console.log('card deleted');
      this.setState({showCard: false}, () => this.getCards())
    })
    .catch( (err) => console.log('error in delete to cards: ', err));
  }

  flipCard() {
    this.setState({showFront: !this.state.showFront});
  }

  hideCard() {
    this.setState({showCard: false});
  }

  updateCard() {
    this.hideCard();
    this.toggleForm('edit');
  }

  getCategories() {
    axios.get('/categories')
    .then( ({data}) => {
      this.setState({categories: data})
    })
    .catch( (err) => console.log('error in get to categories: ', err));
  }

  getCards() {
    axios.get('/cards', {params: {subject: this.state.currentCategory}})
    .then(({data}) => {
      this.setState({cards: data})
    })
    .catch( (err) => console.log('error in get to cards: ', err));
  }

  cardClick(target) {
    this.setState({currentCard: target, showCard: true, showFront: true})
  }

  subjectClick(target) {
    this.setState({currentCategory: target}, () => this.getCards())
  }

  render() {
    return (
      <div>
        <button class="add-button" onClick={() => this.toggleForm('new')}>Add a Card</button>
        <Menus categories={this.state.categories} subjectClick={this.subjectClick}/>
        <CardsDisplay cards={this.state.cards} cardClick={this.cardClick}/>

        {this.state.showForm ? <CardForm 
          card={this.state.currentCard} 
          toggleForm={this.toggleForm} 
          getCategories={this.getCategories}
          submitType={this.state.cardType}/> 
          : null}

        {this.state.showCard ? <Card 
          currentCard={this.state.currentCard} 
          showFront={this.state.showFront}
          deleteCard={this.deleteCard}
          flipCard={this.flipCard} 
          hideCard={this.hideCard} 
          updateCard={this.updateCard}/>
          : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));