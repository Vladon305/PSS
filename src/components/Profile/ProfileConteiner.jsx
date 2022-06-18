import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { useParams } from 'react-router-dom';
import { usersAPI } from '../../API/API';
import { setUserProfile } from '../../Redux/profile-Reducer'
import { useEffect } from 'react';
import { compose } from 'redux';

const ProfileConteiner = ({ profile, ...props }) => {

  let { userId } = useParams();
  if (!userId) {
    userId = 1
  }

  const setUserProfile = (data) => props.setUserProfile(data);

  useEffect(() => {
    // props.toggleIsFetching(true)

    usersAPI.getUserProfile(userId).then(data => {
      // props.toggleIsFetching(false);
      setUserProfile(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Profile {...props} profile={profile} />

}

// class ProfileConteiner extends React.Component {

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
  connect(mapStateToProps, { setUserProfile }),
)(ProfileConteiner);