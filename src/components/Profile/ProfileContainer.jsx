import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getUserProfile, getUserStatus } from '../../Redux/profile-Reducer'
import { useEffect } from 'react';
import { compose } from 'redux';

const ProfileContainer = ({ authorizedUserId, getUserProfile, getUserStatus, works, profile, status, updateUserStatus }) => {

  let { userId } = useParams();
  let redirect = false

  useEffect(() => {
    getUserProfile(userId)
    getUserStatus(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (!userId) {
    userId = authorizedUserId;
    if (userId) {
      return redirect = true
    }
  }

  if (redirect) {
    return <Navigate to={'/Friends'} />
  }
  // if (isAuth === false) {
  //   return <Navigate to={'/Friends'} />
  // }

  return <Profile
    works={works}
    profile={profile}
    status={status}
    updateUserStatus={updateUserStatus} />

}

// class ProfileContainer extends React.Component {

//   componentDidMount() {
//     // this.props.toggleIsFetching(true)
//     usersAPI.getUserProfile(userId)
//       .then(response => {
//         // this.props.toggleIsFetching(false);
//         this.props.setUserProfile(response.data);
//       });
//   }

//   render() {
//     return <Profile {...this.props} profile={this.props.profile} />
//   }
// }

const mapStateToProps = (state) => {
  return {
    works: state.works,
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    authorizedUserId: state.auth.userId,
    // isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus }),
)(ProfileContainer);