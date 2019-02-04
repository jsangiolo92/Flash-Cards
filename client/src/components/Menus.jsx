import React from 'react';
import SubjectsMenu from './menu-components/SubjectsMenu.jsx';

const axios = require('axios');

const Menus = ({categories}) => {
  return(
    <nav>
      <ul>
        <SubjectsMenu categories={categories}/>
      </ul>
    </nav>
  )
}

export default Menus;