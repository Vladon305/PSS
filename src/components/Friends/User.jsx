import React from 'react';
import userPhoto from '../../assets/images/user.webp';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../API/API';

const User = ({ id, photos, followed, follow, unfollow, fullName, status, ...props }) => {
  return (
    <div className='user' key={id}>
      <div className='user-inner'>
        <div className='user__present'>
          <NavLink className='user__img' to={`/Profile/${id}`}>
            <img src={photos != null ? photos : userPhoto} alt='user' />
          </NavLink>
          <div className="user__followed">
            {followed ?
              <button onClick={() => {
                followAPI.unfollowing(id).then(data => {
                  if (data.resultCode === 0) {
                    follow(id)
                  }
                })
              }} >unfollow</button>
              : <button onClick={() => {
                followAPI.following(id).then(data => {
                  if (data.resultCode === 0) {
                    unfollow(id)
                  }
                })
              }} >follow</button>}
          </div>
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