import React from 'react';
import Link from './Link';

const SideBar = (props) => {
  let LinkElements = props.sideBar.map(p => <Link page={p.page} link={p.link} key={p.page} />)
  return (
    <div className='SideBar'>
      <div className='menu'>
        <div className="menu__icon icon-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='SideBar__inner'>{LinkElements}</div>
    </div>
  );
}

export default SideBar;