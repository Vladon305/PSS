import AboutUser from './AboutUser';
import { connect } from "react-redux";
import { updateUserStatus } from '../../../Redux/profile-Reducer'

const mapStateToProps = (state) => {
  return {
    aboutMe: state.ProfilePage.profile.aboutMe,
    fullName: state.ProfilePage.profile.fullName,
    ava: state.ProfilePage.profile.photos,
    status: state.ProfilePage.status,
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { updateUserStatus })(AboutUser);