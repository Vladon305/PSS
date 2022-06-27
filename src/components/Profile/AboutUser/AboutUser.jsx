import React from 'react';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import userPhoto from '../../../assets/images/user.webp';
import Preloader from '../../common/Preloader/Preloader';

const AboutUser = ({ fullName, aboutMe, ava, status, updateUserStatus, initialized, userId, profileId }) => {
  return (
    <div className='AboutUser'>
      <section className="preview">
        <div className="preview__flex">
          <div className="preview__content">
            <h1 className="preview__title title">{fullName}</h1>
            {initialized ?
              <ProfileStatus status={status} updateUserStatus={updateUserStatus} userId={userId} profileId={profileId} />
              : <Preloader />}
            <div className="preview__text text">{!aboutMe ? 'I`m creative developer' : aboutMe}</div>
            <div className="preview__btn">
              <button className="btn">Download Resume</button>
            </div>
          </div>
          <div className="preview__avatar">
            <img src={ava.large ? ava.large : userPhoto} alt="ava" />
          </div>
        </div>
      </section >
    </div >
  );
}
export default AboutUser;