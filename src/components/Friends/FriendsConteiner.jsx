import Friends from './Friends';
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from '../../Redux/friends-Reduser';
import React from 'react';
import axios from 'axios';

class FriendsConteiner extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {

      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
      });
    }
  }
  render() {
    return <Friends users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.FriendsPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsConteiner);
