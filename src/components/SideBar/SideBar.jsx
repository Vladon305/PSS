import React from 'react';
import Link from './Link';

const SideBar = (props) => {

  let LinkElements = props.sideBar.map(p => <Link page={p.page} link={p.link} key={p.page} />)
  return (

    <div className={props.toggleActiveStyles()}>
      <div className='SideBar__inner'>{LinkElements}</div>
    </div>

  );
}

export default SideBar;