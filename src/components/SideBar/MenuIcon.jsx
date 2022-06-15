import React from 'react';

const MenuIcon = (props) => {
  return (
    <div className='menu' onClick={props.toggleActive}>
      <div className={props.toggleActiveStyles()} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default MenuIcon;