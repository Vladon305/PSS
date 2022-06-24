import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile, getUserStatus } from '../../Redux/profile-Reducer'
import { useEffect } from 'react';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../HOCs/withAuthRedirect';

const ProfileContainer = (props) => {

  let { userId } = useParams();
  if (!userId) {
    userId = 24521;
  }

  useEffect(() => {
    props.getUserProfile(userId)
    props.getUserStatus(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <Profile
    works={props.works}
    profile={props.profile}
    status={props.status}
    updateUserStatus={props.updateUserStatus} />

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
    status: state.ProfilePage.status
  }
}

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, { getUserProfile, getUserStatus }),
)(ProfileContainer);