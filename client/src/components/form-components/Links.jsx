import React from 'react';

const Links = ({links, handleChange}) => {
  return(
    <textarea rows="4" cols="50" 
      name="links"
      placeholder="Links"
      value={links}
      onChange={handleChange}
    />
  )
}

export default Links;