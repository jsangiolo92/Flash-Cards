import React from 'react';

const Answer = ({answer, handleChange}) => {
  return(
    <textarea
      class="card-input answer"
      name="answer"
      placeholder="Answer"
      value={answer}
      onChange={handleChange}
    />
  )
}

export default Answer;