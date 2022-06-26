import Friends from './Friends';
import { connect } from "react-redux";
import {
  acceptFollow, setPage, acceptUnfollow,
  toggleFollowingProgress, getUsers, follow, unfollow
} from '../../Redux/friends-Reducer';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOCs/withAuthRedirect';

const FriendsContainer = ({ getUsers, page, setPage, pageSize, totalUsersCount, ...props }) => {

  useEffect(() => {
    getUsers(page, pageSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPostChanged = (pageNumber) => {
    getUsers(pageNumber, pageSize)
  };

  return <Friends
    onPostChanged={onPostChanged}
    toggleFollowingProgress={toggleFollowingProgress}
    totalUsersCount={totalUsersCount}
    page={page}
    setPage={setPage}
    pageSize={pageSize}
    {...props}
  />
}

// class FriendsContainer extends React.Component {

//   componentDidMount() {
//     this.props.toggleIsFetching(true)
//     if (this.props.users === 0) {
//       usersAPI.getUsers(this.props.page, this.props.pageSize).then(data => {
//         this.props.toggleIsFetching(false)
//         this.props.setUsers(data.items)
//         this.props.setTotalUsersCount(data.totalCount)
//       });
//     } else {
//       this.props.toggleIsFetching(false)
//     }
//   }
//   onPostChanged = (pageNumber) => {
//     this.props.toggleIsFetching(true)
//     this.props.setPage(pageNumber);
//     usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
//       this.props.toggleIsFetching(false)
//       this.props.setUsers(data.items)
//     });
//   }
//   render() {

//     // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

//     let pages = [];
//     // pagesCount
//     for (let i = 1; i <= 20; i++) {
//       pages.push(i)
//     }

//     return <>
//       <Friends
//         users={this.props.users}
//         follow={this.props.follow}
//         unfollow={this.props.unfollow}
//         pages={pages}
//         page={this.props.page}
//         setPage={this.props.setPage}
//         onPostChanged={this.onPostChanged}
//         isFetching={this.props.isFetching}
//       />
//     </>
//   }
// }

const mapStateToProps = (state) => {
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
    acceptFollow, acceptUnfollow, setPage,
    toggleFollowingProgress, getUsers, follow, unfollow
  }))
  (FriendsContainer);