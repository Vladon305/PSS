import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ link, page }) => {

  return (
    <NavLink to={link}>
      {page}
    </NavLink>
  );
}

export default Link;