import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../Redux/profile-Reducer'
import { useEffect } from 'react';
import { compose } from 'redux';

const ProfileContainer = (props) => {

  let { userId } = useParams();
  if (!userId) {
    userId = 24521;
  }

  useEffect(() => {
    props.getUserProfile(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <Profile works={props.works} profile={props.profile} />

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
    profile: state.ProfilePage.profile
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile }),
)(ProfileContainer);