import React from 'react';

const Subject = ({subject, handleChange}) => {
  return(
    <input
      name="subject"
      placeholder="Subject"
      type="text"
      value={subject}
      onChange={handleChange}
      />
  )
}

export default Subject;