import React from 'react';
import User from './User';
import Preloader from '../common/Preloader/Preloader';


const Friends = ({ pages, currentPage, setCurrentPage, isFetching, users, follow, unfollow, followingInProgress, toggleFollowingProgress, ...props }) => {
  let onPageChange = (p) => {
    props.onPostChanged(p)
    setCurrentPage(p)
  }
  return (
    <div className='Friends'>
      <div className='container'>
        <div className='pagination'>
          {pages.map(p => {
            return <span
              className={currentPage === p ? 'selectedPage' : null}
              key={p}
              onClick={(e) => {
                onPageChange(p);
              }}>{p}</span>
          })}
        </div>

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