import Friends from './Friends'
import { connect } from 'react-redux'
import {
  acceptFollow, setPage, acceptUnfollow, getUsers, follow, unfollow
} from '../../Redux/friends-Reducer'
import React, { useEffect } from 'react'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOCs/withAuthRedirect'
import { AppStateType } from '../../Redux/redux-store'
import { UserType } from '../../types/types'

type PropsType = {
  page: number
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  users: Array<UserType>
  followingInProgress: Array<number>

  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (pageNumber: number, pageSize: number) => void
  setPage: (page: number) => void
}

const FriendsContainer: React.FC<PropsType> = ({ getUsers, page, setPage, pageSize, totalUsersCount, ...props }) => {

  useEffect(() => {
    getUsers(page, pageSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPostChanged = (pageNumber: number) => {
    getUsers(pageNumber, pageSize)
  };

  return <Friends
    onPostChanged={onPostChanged}
    totalUsersCount={totalUsersCount}
    page={page}
    setPage={setPage}
    pageSize={pageSize}
    {...props}
  />
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.FriendsPage.users,
    pageSize: state.FriendsPage.pageSize,
    totalUsersCount: state.FriendsPage.totalUsersCount,
    page: state.FriendsPage.page,
    isFetching: state.FriendsPage.isFetching,
    followingInProgress: state.FriendsPage.followingInProgress
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    acceptFollow, acceptUnfollow, setPage, getUsers, follow, unfollow
  }))
  (FriendsContainer)