import React from 'react';

const Title = ({title, handleChange}) => {
  return(
    <input
      class="card-input title"
      name="title"
      placeholder="Title"
      type="text"
      value={title}
      onChange={handleChange}
    />
  )
}

export default Title;