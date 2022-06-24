import React from 'react';
// import { useEffect } from 'react';
import Link from './Link';

const SideBar = (props) => {
  // useEffect(() => {
  //   props.setProfileLink(props.userId)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (

    <div className={props.toggleActiveStyles()}>
      <div className='SideBar__inner'>{
        props.sideBar.map(p => <Link
          page={p.page}
          link={p.link}
          key={p.page} />)}</div>
    </div>

  );
}

export default SideBar;