import React from 'react';

const Subject = ({handleChange}) => {
  return(
    <label>
      Subject
      <input
        name="subject"
        type="text"
        onChange={handleChange}
      />
    </label>
  )
}

export default Subject;