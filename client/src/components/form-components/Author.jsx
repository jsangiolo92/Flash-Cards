import React from 'react';

const Author = ({author, handleChange}) => {
  return(
    <input
      name="author"
      placeholder="Author"
      type="text"
      value={author}
      onChange={handleChange}
    />
  )
}

export default Author;