import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ link, page }) => {

  return (
    <NavLink to={link} className='Link'>
      {page}
    </NavLink>
  );
}

export default Link;