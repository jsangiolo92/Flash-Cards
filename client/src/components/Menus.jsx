import React from 'react';

const axios = require('axios');

class Menus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      currentCategory: ''
    }
  }

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return(
      <nav>
        Menus PlaceHolder
      </nav>
    )
  }
}

export default Menus;