import React from 'react';

const Subject = ({subject, handleChange}) => {
  return(
    <label>
      Subject
      <input
        name="subject"
        type="text"
        value={subject}
        onChange={handleChange}
      />
    </label>
  )
}

export default Subject;