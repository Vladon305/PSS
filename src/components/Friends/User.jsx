import React from 'react';
import userPhoto from '../../assets/images/user.webp';

const User = (props) => {
  return (
    <div className='user' key={props.id}>
      <div className='user__present'>
        <div className='user__img'><img src={props.photos != null ? props.photos : userPhoto} alt='user' /></div>
        <div className='user__followed'>{
          props.followed ?
            <button onClick={() => props.unfollow(props.id)}>unfollow</button>
            : <button onClick={() => props.follow(props.id)}>follow</button>
        }</div>
      </div>
      <div className='user__info'>
        <div className="user__name">{props.fullName}</div>
        <div className="user__status">{props.status}</div>
        <div className='user__location'>
          <div className="user__city">{"props.city"}</div>
          <div className="user__country">{"props.country"}</div>
        </div>
      </div>
    </div>
  );
}

export default User;