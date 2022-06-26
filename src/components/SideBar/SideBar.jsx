import React from 'react';
import Link from './Link';

const SideBar = ({ toggleActiveStyles, sideBar }) => {
  return (

    <div className={toggleActiveStyles()}>
      <div className='SideBar__inner'>{
        sideBar.map(p => <div className='Link' key={p.page}><Link
          page={p.page}
          link={p.link}
          key={p.page} /></div>)}</div>
    </div>

  );
}

export default SideBar;