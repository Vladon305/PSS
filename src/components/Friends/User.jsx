import React from 'react';
import userPhoto from '../../assets/images/user.webp';
import { NavLink } from 'react-router-dom';

const User = ({ id, photos, followed, follow, unfollow, fullName, status, ...props }) => {
  return (
    <div className='user' key={id}>
      <div className='user-inner'>
        <div className='user__present'>
<<<<<<< HEAD
          <NavLink className='user__img' to={`/Profile/${id}`}>
            <img src={photos != null ? photos : userPhoto} alt='user' />
          </NavLink>
=======
          <NavLink className='user__img' to={`Profile/${props.id}`}><img src={props.photos != null ? props.photos : userPhoto} alt='user' /></NavLink>
>>>>>>> 92ee8c093685e4a4af92293891ae8e803221a20d
          <div className='user__followed'>{
            followed ?
              <button onClick={() => unfollow(id)}>unfollow</button>
              : <button onClick={() => follow(id)}>follow</button>
          }</div>
        </div>
        <div className='user__info'>
          <div className="user__name">{fullName}</div>
          <div className="user__status">{status}</div>
          <div className='user__location'>
            <div className="user__city">{"props.city"}</div>
            <div className="user__country">{"props.country"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;