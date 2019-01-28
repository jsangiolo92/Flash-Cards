import React from 'react';

const Author = ({author, handleChange}) => {
  return(
    <label>
      Author
      <input
        name="author"
        type="text"
        value={author}
        onChange={handleChange}
      />
    </label>
  )
}

export default Author;