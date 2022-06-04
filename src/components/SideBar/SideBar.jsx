import React from 'react';
import Link from './Link';

const SideBar = (props) => {
  let LinkElements = props.sideBar.map(p => <Link page={p.page} link={p.link} key={p.page} />)
  return (
    <div className='SideBar'>
      {LinkElements}
    </div>
  );
}

export default SideBar;