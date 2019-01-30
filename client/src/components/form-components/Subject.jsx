import React from 'react';

const Subject = ({subject, handleChange}) => {
  return(
    <input
      class="card-input"
      name="subject"
      placeholder="Subject"
      type="text"
      value={subject}
      onChange={handleChange}
      />
  )
}

export default Subject;