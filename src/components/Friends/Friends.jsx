import React from 'react';
import User from './User';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';


const Friends = ({
  totalUsersCount, pageSize, onPostChanged,
  page, setPage, isFetching,
  users, follow, unfollow, followingInProgress }) => {
  let onPageChange = (p) => {
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
            photos={u.photos.small}
            fullName={u.name}
            status={u.status}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
          />)
        }

      </div>
    </div>
  );
}

export default Friends;