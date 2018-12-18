import React from 'react';
import ReactDOM from 'react-dom';
import CardForm from './components/CardForm.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({showForm: !this.state.showForm});
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Add a Card</button>
        {this.state.showForm ? <CardForm toggleForm={this.toggleForm}/> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));