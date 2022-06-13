import React from 'react';
import User from './User';

const Friends = (props) => {
  let onPageChanged = (p) => {
    props.onPostChanged(p)
  }
  return (
    <div className='Friends'>
      <div className='conteiner'>
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
            photos={u.photos.small}
            fullName={u.name}
            status={u.status}
            follow={props.follow}
            unfollow={props.unfollow}
          />)
        }
      </div>
    </div>
  );
}

export default Friends;