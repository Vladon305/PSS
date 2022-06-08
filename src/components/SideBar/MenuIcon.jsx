import React from 'react';

const MenuIcon = (props) => {
  const openSideBar = () => {

  }
  return (
    <div className='menu'>
      <div className="menu__icon icon-menu" onClick={openSideBar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default MenuIcon;