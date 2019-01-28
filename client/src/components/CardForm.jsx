import React from 'react';
import Title from './form-components/Title.jsx';
import Subject from './form-components/Subject.jsx';
import Answer from './form-components/Answer.jsx';
import Links from './form-components/Links.jsx';
import Author from './form-components/Author.jsx';

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
        <Title handleChange={this.handleChange}/>
        <br/>
        <Subject handleChange={this.handleChange}/>
        <br/>
        <Answer handleChange={this.handleChange}/>
        <br/>
        <Links handleChange={this.handleChange}/>
        <br/>
        <Author handleChange={this.handleChange}/>
        <br/>
        <input type="submit" value="Submit"/>
        <button onClick={this.props.toggleForm}>Close Form</button>
      </form>
    )
  }
}

export default CardForm;