import React from 'react';

const Title = ({handleChange}) => {
  return(
    <label>
      Title
      <input
        name="title"
        type="text"
        onChange={handleChange}
      />
    </label>
  )
}

export default Title;