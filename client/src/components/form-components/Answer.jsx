import React from 'react';

const Answer = ({handleChange}) => {
  return(
    <label>
      Answer
      <textarea rows="4" cols="50"
        name="answer"
        onChange={handleChange}
      />
    </label>
  )
}

export default Answer;