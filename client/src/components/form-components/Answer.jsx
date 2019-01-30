import React from 'react';

const Answer = ({answer, handleChange}) => {
  return(
    <textarea rows="4" cols="50"
      name="answer"
      placeholder="Answer"
      value={answer}
      onChange={handleChange}
    />
  )
}

export default Answer;