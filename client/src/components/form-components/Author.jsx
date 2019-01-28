import React from 'react';

const Author = ({handleChange}) => {
  return(
    <label>
      Author
      <input
        name="author"
        type="text"
        onChange={handleChange}
      />
    </label>
  )
}

export default Author;