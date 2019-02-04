import React from 'react';

const Links = ({links, handleChange}) => {
  return(
    <textarea
      class="card-input links"
      name="links"
      placeholder="Links"
      value={links}
      onChange={handleChange}
    />
  )
}

export default Links;