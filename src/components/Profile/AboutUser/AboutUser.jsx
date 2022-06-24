import React from 'react';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import userPhoto from '../../../assets/images/user.webp';

const AboutUser = ({ fullName, aboutMe, ava, status, updateUserStatus }) => {
  return (
    <div className='AboutUser'>
      <section className="preview">
        <div className="preview__flex">
          <div className="preview__content">
            <h1 className="preview__title title">{fullName}</h1>
            <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
            <div className="preview__text text">{!aboutMe ? 'I`m creative developer' : aboutMe}</div>
            <div className="preview__btn">
              <button className="btn">Download Resume</button>
            </div>
          </div>
          <div className="preview__avatar">
            <img src={ava ? ava : userPhoto} alt="ava" />
          </div>
        </div>
      </section >
    </div >
  );
}
export default AboutUser;