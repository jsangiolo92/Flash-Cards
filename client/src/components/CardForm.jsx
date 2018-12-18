import React from 'react';

const axios = require('axios');

class CardForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      answer: '',
      links: [],
      author: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'links') this.setState({links: e.target.value.split('\n')});
    else this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    document.getElementById('card-form').reset();
    this.setState({title: '', answer: '', links: [], author: ''})
  }

  render() {
    return(
      <form id="card-form" onSubmit={this.handleSubmit}>
        <label>
          <input
            name="title"
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          <textarea rows="4" cols="50"
            name="answer"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          <textarea rows="4" cols="50"
            name="links"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          <input
            name="author"
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <input type="submit" value="Submit"/>
        <button onClick={this.props.toggleForm}>Close Form</button>
      </form>
    )
  }
}

export default CardForm;