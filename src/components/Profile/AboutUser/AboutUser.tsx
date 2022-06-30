import React from 'react'
import ProfileStatus from './ProfileStatus/ProfileStatus'
// @ts-ignore
import userPhoto from '../../../assets/images/user.webp'
import Preloader from '../../common/Preloader/Preloader'
import { PhotosType } from '../../../types/types'

type PropsType = {
  fullName: string
  ava: PhotosType
  status: string
  initialized: boolean
  userId: number
  profileId: number
  updateUserStatus: (newStatus: string) => void
}

const AboutUser: React.FC<PropsType> = ({ fullName, ava, status, updateUserStatus, initialized, userId, profileId }) => {
  return (
    <div className='AboutUser'>
      <section className="preview">
        <div className="preview__flex">
          <div className="preview__content">
            <h1 className="preview__title title">{fullName}</h1>
            {initialized ?
              <ProfileStatus status={status} updateUserStatus={updateUserStatus} userId={userId} profileId={profileId} />
              : <Preloader />}
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
  )
}
export default AboutUser