import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.jsx';
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
      // categories: [],
      // currentCategory: '',
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
  }

  // componentDidMount() {
  //   this.getCategories()
  // }

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

  dropDownChange(e) {
    if (e.target.id === 'subjects') this.setState({currentCategory: e.target.value}, () => this.getCards())
    else if (e.target.id === 'cards') this.setState({currentCard: this.state.cards[e.target.value], showCard: true, showFront: true})
  }

  render() {
    return (
      <div>

        <Menus getCategories ={this.getCategories}/>
        {/*<select id="subjects" onChange={(e) => this.dropDownChange(e)}>
          <option defaultValue>Card Categories</option>
          {this.state.categories.map(category =>
            <option value={category} key={category}>{category}</option>  
          )}
          </select>*/}

        <select id="cards" onChange={(e) => this.dropDownChange(e)}>
          <option defaultValue>Select a Card</option>
          {this.state.cards.map( (card, index) =>
            <option value={index} key={index}>{card.title}</option>  
          )}
        </select>
        <br/><br/>

        <button onClick={() => this.toggleForm('new')}>Add a Card</button>

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