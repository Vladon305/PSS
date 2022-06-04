import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
  return (
    <NavLink to={props.link} className='Link'>
      {props.page}
    </NavLink>
  );
}

export default Link;