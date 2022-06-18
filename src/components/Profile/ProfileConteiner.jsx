import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setUserProfile } from '../../Redux/profile-Reducer';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import { usersAPI } from '../../API/API';
import { useEffect } from 'react';

const ProfileConteiner = ({ profile, ...props }) => {

  let { userId } = useParams();
  if (!userId) {
    userId = 1
=======
import { usersAPI } from '../../API/API';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

export function withParams(component) {
  return props => <component {...props} params={useParams()} />
}

class ProfileConteiner extends React.Component {

  componentDidMount() {
    // this.props.toggleIsFetching(true)
    usersAPI.getUserProfile(this.props.params).then(data => {
      // this.props.toggleIsFetching(false);
      this.props.setUserProfile(data);
    });
>>>>>>> 92ee8c093685e4a4af92293891ae8e803221a20d
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
  withParams
)(ProfileConteiner);