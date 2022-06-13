import React from 'react';
import User from './User';

const Friends = (props) => {
  let onPageChanged = (p) => {
    props.onPostChanged(p)
  }
  return (
    <div className='Friends'>
      <div className='pagination'>
        {props.pages.map(p => {
          return <span
            className={props.currentPage === p ? 'selectedPage' : null}
            key={p}
            onClick={(e) => {
              onPageChanged(p);
            }}>{p}</span>
        })}
      </div>
      {
        props.users.map(u => <User
          followed={u.followed}
          id={u.id}
          key={u.id}
          photos={u.photos.smoll}
          fullName={u.name}
          follow={props.follow}
          unfollow={props.unfollow}
        />)
      }
    </div>
  );
}

export default Friends;