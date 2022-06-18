import AboutUser from './AboutUser';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    aboutMe: state.ProfilePage.profile.aboutMe,
    fullName: state.ProfilePage.profile.fullName,
    ava: state.ProfilePage.profile.photos.large
  }
}

const AboutUserConteiner = connect(mapStateToProps)(AboutUser);

export default AboutUserConteiner;