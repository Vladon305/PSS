import Header from './Header';
import { connect } from "react-redux";
import { logout } from '../../Redux/auth-Reducer';

const HeaderContainer = (props) => {
  return <Header {...props} />
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId

    // ava: state.ProfilePage.profile.photos.large
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);