import Profile from './Profile'
import { connect } from 'react-redux'
import React, { ReactElement } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getUserProfile, getUserStatus } from '../../Redux/profile-Reducer'
import { useEffect } from 'react'
import { compose } from 'redux'
import { AppStateType } from '../../Redux/redux-store'

type MapPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchType = {
  getUserProfile: (userId: number | string | undefined) => void
  getUserStatus: (userId: number | string | undefined) => void
}

const ProfileContainer: React.FC<MapPropsType & MapDispatchType> = ({ authorizedUserId, getUserProfile, getUserStatus,
  works, profile }): ReactElement => {

  let { userId } = useParams()
  let redirect = false

  useEffect(() => {
    getUserProfile(userId)
    getUserStatus(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  if (!userId) {
    //@ts-ignore
    userId = authorizedUserId;
    if (userId) {
      //@ts-ignore

      return redirect = true
    }
  }

  if (redirect) {
    return <Navigate to={'/Friends'} />
  }

  return <Profile
    works={works}
    profile={profile} />

}

const mapStateToProps = (state: AppStateType) => {
  return {
    works: state.works,
    profile: state.ProfilePage.profile,
    authorizedUserId: state.auth.userId,
    // isAuth: state.auth.isAuth
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getUserStatus }),
)(ProfileContainer)