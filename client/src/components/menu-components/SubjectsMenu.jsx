import React from 'react';

const SubjectsMenu = ({categories, subjectClick}) => {
  return(
    <li>
      <a>Subjects</a>
      <ul>
        {categories.map( (category, index) => 
          <li key={index}><a onClick={() => {subjectClick(category)}}>{category}</a></li>
        )}
      </ul>
    </li>
  )
}

export default SubjectsMenu;
