import Friends from './Friends';
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching } from '../../Redux/friends-Reduser';
import React from 'react';
import axios from 'axios';

class FriendsConteiner extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    // if (this.props.users !== 0) {
    axios.get
      (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
    // } else {
    // this.props.toggleIsFetching(false)
    // }
    console.log(this.props.users);
  }
  onPostChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      });
  }
  render() {

    // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    // pagesCount
    for (let i = 1; i <= 20; i++) {
      pages.push(i)
    }

    return <>
      <Friends
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        pages={pages}
        currentPage={this.props.currentPage}
        setCurrentPage={this.props.setCurrentPage}
        onPostChanged={this.onPostChanged}
        isFetching={this.props.isFetching}
      />
    </>
  }
}

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
  (FriendsConteiner);