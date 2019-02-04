import React from 'react';

const SubjectsMenu = ({categories}) => {
  return(
    <li>
      <ul>
        {categories.map( (category, index) => 
          <li key={index}>{category}</li>
        )}
      </ul>
    </li>
  )
}

export default SubjectsMenu;

/*<select id="subjects" onChange={(e) => this.dropDownChange(e)}>
          <option defaultValue>Card Categories</option>
          {this.state.categories.map(category =>
            <option value={category} key={category}>{category}</option>  
          )}
          </select>*/