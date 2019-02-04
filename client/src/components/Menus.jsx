import React from 'react';
import SubjectsMenu from './menu-components/SubjectsMenu.jsx';

const axios = require('axios');

const Menus = ({categories, subjectClick}) => {
  return(
    <nav>
      <ul>
        <SubjectsMenu categories={categories} subjectClick={subjectClick}/>
      </ul>
    </nav>
  )
}

export default Menus;