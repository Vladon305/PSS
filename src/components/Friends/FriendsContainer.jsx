import Friends from './Friends';
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching } from '../../Redux/friends-Reducer';
import React, { useEffect } from 'react';
import { usersAPI } from '../../API/API';

const FriendsContainer = ({ currentPage, pageSize, users, follow, unfollow, isFetching, ...props }) => {

  useEffect(() => {
    props.toggleIsFetching(true);
    // if (props.users === 0) {
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      props.toggleIsFetching(false);
      props.setUsers(data.items);
      props.setTotalUsersCount(data.totalCount);
    });
    // } else {
    //   props.toggleIsFetching(false);
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPostChanged = (pageNumber) => {
    props.toggleIsFetching(true)
    props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, pageSize).then(data => {
      props.toggleIsFetching(false)
      props.setUsers(data.items)
    });
  };

  // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

  let pages = [];
  // pagesCount
  for (let i = 1; i <= 20; i++) {
    pages.push(i)
  }

  return <Friends
    users={users}
    follow={follow}
    unfollow={unfollow}
    pages={pages}
    currentPage={currentPage}
    setCurrentPage={props.setCurrentPage}
    onPostChanged={onPostChanged}
    isFetching={isFetching}
  />
}

// class FriendsContainer extends React.Component {

//   componentDidMount() {
//     this.props.toggleIsFetching(true)
//     if (this.props.users === 0) {
//       usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
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
//     this.props.setCurrentPage(pageNumber);
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
//         currentPage={this.props.currentPage}
//         setCurrentPage={this.props.setCurrentPage}
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
    currentPage: state.FriendsPage.currentPage,
    isFetching: state.FriendsPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage,
  setTotalUsersCount, toggleIsFetching
})
  (FriendsContainer);