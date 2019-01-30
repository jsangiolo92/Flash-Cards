import React from 'react';

const Title = ({title, handleChange}) => {
  return(
    <input 
      name="title"
      placeholder="Title"
      type="text"
      value={title}
      onChange={handleChange}
    />
  )
}

export default Title;