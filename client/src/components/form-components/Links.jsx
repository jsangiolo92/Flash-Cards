import React from 'react';

const Links = ({links, handleChange}) => {
  return(
    <label>
      Links
      <textarea rows="4" cols="50" 
        name="links"
        value={links}
        onChange={handleChange}
      />
    </label>

  )
}

export default Links;