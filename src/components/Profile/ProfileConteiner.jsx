import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setUserProfile } from '../../Redux/profile-Reducer';
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
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

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