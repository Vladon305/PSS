import React from 'react';
import User from './User';

const Friends = (props) => {
  return (
    <div className='Friends'>
      <div className="selectedPage">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
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