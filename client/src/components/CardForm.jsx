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
      title: this.props.card.title,
      subject: this.props.card.subject,
      answer: this.props.card.answer,
      links: this.props.card.links,
      author: this.props.card.author
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'links') this.setState({links: e.target.value.split(',')});
    else this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    if(e.target.tagName !== 'TEXTAREA') e.preventDefault();

    if (this.props.submitType === 'new') {
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
    else {
      axios.put('/cards', {
        _id: this.props.card._id,
        title: this.state.title,
        subject: this.state.subject,
        answer: this.state.answer,
        links: this.state.links,
        author: this.state.author
      })
      .then( (response) => console.log('put request sent'))
      .catch( (err) => console.log('error in put to cards: ', err));
    }
  }


  render() {
    return(
      <form id="card-form" onSubmit={this.handleSubmit}>
        <Title title={this.state.title} handleChange={this.handleChange}/>
        <br/>
        <Subject subject={this.state.subject} handleChange={this.handleChange}/>
        <br/>
        <Answer answer={this.state.answer} handleChange={this.handleChange}/>
        <br/>
        <Links links={this.state.links} handleChange={this.handleChange}/>
        <br/>
        <Author author={this.state.author} handleChange={this.handleChange}/>
        <br/>
        <input type="submit" value="Submit"/>
        <button onClick={this.props.toggleForm}>Close Form</button>
      </form>
    )
  }
}

export default CardForm;