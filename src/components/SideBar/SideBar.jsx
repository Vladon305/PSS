import React from 'react';
import Link from './Link';
import MenuIcon from './MenuIcon';

const SideBar = (props) => {
  let LinkElements = props.sideBar.map(p => <Link page={p.page} link={p.link} key={p.page} />)
  return (
    <>
      <MenuIcon />
      <div className='SideBar'>
        <div className='SideBar__inner'>{LinkElements}</div>
      </div>
    </>
  );
}

export default SideBar;