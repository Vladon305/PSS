import Header from './Header';
import { connect } from "react-redux";
import { setAuthUserProfile, getAuthUser } from '../../Redux/auth-Reducer';
import { useEffect } from 'react';

const HeaderContainer = (props) => {

  useEffect(() => {
    props.getAuthUser()
    // if (props.isAuth === true) {
    //   usersAPI.getUserProfile(id).then(data => {
    //     props.setAuthUserProfile(data)
    //   })
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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

export default connect(mapStateToProps, { setAuthUserProfile, getAuthUser })(HeaderContainer);