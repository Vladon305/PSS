import React from 'react'
import userPhoto from '../../assets/images/user.webp'
import { NavLink } from 'react-router-dom'

type PropsType = {
  id: number
  photos: string | undefined
  followed: boolean
  fullName: string
  status: string
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ id, photos, followed, follow, unfollow, fullName, status, followingInProgress }) => {
  return (
    <div className='user'>
      <div className='user-inner'>
        <div className='user__present'>
          <NavLink className='user__img' to={`/Profile/${id}`}>
            <img src={photos ? photos : userPhoto} alt='user' />
          </NavLink>
          <div className="user__followed">
            {followed ?
              <button
                disabled={followingInProgress.some(uId => uId === id)}
                onClick={() => { unfollow(id) }} >Unfollow</button>
              : <button
                disabled={followingInProgress.some(uId => uId === id)}
                onClick={() => { follow(id) }} >Follow</button>}
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
  )
}

export default User