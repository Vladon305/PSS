import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setUserProfile } from '../../Redux/profile-Reducer';
import axios from 'axios';
import { useParams } from 'react-router-dom';


let userId = useParams();
if (!userId) {
  userId = 1
}

class ProfileConteiner extends React.Component {

  componentDidMount() {
    // this.props.toggleIsFetching(true)
    axios.get
      (`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        // this.props.toggleIsFetching(false);
        this.props.setUserProfile(response.data);
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

export default connect(mapStateToProps, { setUserProfile })(ProfileConteiner);