import React from 'react';

const axios = require('axios');

class CardForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      subject: '',
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

    axios.post('/cards', {
      title: this.state.title,
      subject: this.state.subject,
      answer: this.state.answer,
      links: this.state.links,
      author: this.state.author
    })
    .then( (response) => {
      console.log('new card added to db');
      document.getElementById('card-form').reset();
      this.setState({title: '', subject: '', answer: '', links: [], author: ''}, () => this.props.getCategories());
    })
    .catch( (err) => console.log('error on post to cards'))
  }

  render() {
    return(
      <form id="card-form" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
            name="title"
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Subject
          <input
            name="subject"
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Answer
          <textarea rows="4" cols="50"
            name="answer"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Links
          <textarea rows="4" cols="50"
            name="links"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Author
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