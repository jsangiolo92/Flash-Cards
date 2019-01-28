import React from 'react';

const Links = ({handleChange}) => {
  return(
    <label>
      Links
      <textarea rows="4" cols="50" 
        name="links"
        onChange={handleChange}
      />
    </label>

  )
}

export default Links;