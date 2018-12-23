import React from 'react';
import ReactDOM from 'react-dom';
import CardForm from './components/CardForm.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      categories: [],
      currentCategory: '',
      cards: []
    }

    this.toggleForm = this.toggleForm.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories()
  }

  toggleForm() {
    this.setState({showForm: !this.state.showForm});
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

  categoryChange(e) {
    this.setState({currentCategory: e.target.value}, () => this.getCards())
  }

  render() {
    return (
      <div>

        <select onChange={(e) => this.categoryChange(e)}>
          <option defaultValue>Card Categories</option>
          {this.state.categories.map(category =>
            <option value={category} key={category}>{category}</option>  
          )}
        </select>

        <select>
          <option defaultValue>Select a Card</option>
          {this.state.cards.map(card =>
            <option value={card.title} key={card.title}>{card.title}</option>  
          )}
        </select>
        <br/><br/>
        
        <button onClick={this.toggleForm}>Add a Card</button>
        {this.state.showForm ? <CardForm toggleForm={this.toggleForm} getCategories={this.getCategories}/> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));