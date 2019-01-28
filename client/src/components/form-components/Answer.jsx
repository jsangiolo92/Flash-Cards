import React from 'react';

const Answer = ({answer, handleChange}) => {
  return(
    <label>
      Answer
      <textarea rows="4" cols="50"
        name="answer"
        value={answer}
        onChange={handleChange}
      />
    </label>
  )
}

export default Answer;