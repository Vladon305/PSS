import React from 'react'
import User from './User'
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator'
import { UserType } from '../../types/types'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  onPostChanged: (pageNumber: number) => void
  page: number
  setPage: (page: number) => void
  isFetching: boolean
  users: Array<UserType>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: Array<number>

}

const Friends: React.FC<PropsType> = ({
  totalUsersCount, pageSize, onPostChanged,
  page, setPage, isFetching,
  users, follow, unfollow, followingInProgress }) => {
  let onPageChange = (p: number) => {
    onPostChanged(p)
    setPage(p)
  }
  return (
    <div className='Friends'>
      <div className='container'>
        <Paginator
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          page={page}
          onPageChange={onPageChange} />

        {isFetching ? <Preloader /> :
          users.map(u => <User
            followed={u.followed}
            id={u.id}
            key={u.id}
            photos={u.photos.large}
            fullName={u.name}
            status={u.status}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
          />)
        }
      </div>
    </div>
  )
}

export default Friends