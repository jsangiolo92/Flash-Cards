import React from 'react';

const Title = ({title, handleChange}) => {
  return(
    <label>
      Title
      <input 
        name="title" 
        type="text"
        value={title}
        onChange={handleChange}
      />
    </label>
  )
}

export default Title;