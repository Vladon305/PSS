import Header from './Header'
import { connect } from "react-redux"
import { logout } from '../../Redux/auth-Reducer'
import { AppStateType } from '../../Redux/redux-store'

type MapStateType = {
  isAuth: boolean
  login: string | null
  userId: number | null
  ava: string | undefined
}
type MapDispatchType = {
  logout: () => void
}

const HeaderContainer: React.FC<MapStateType & MapDispatchType> = (props) => {
  return <Header {...props} />
}

const mapStateToProps = (state: AppStateType) => {
  // if(state.ProfilePage.profile?.photos.large) {
  //   return {
  //     ava: state.ProfilePage.profile?.photos.large,
  //   isAuth: state.auth.isAuth,
  //   login: state.auth.login,
  //   userId: state.auth.userId,
  //   }
  // }
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    ava: state.ProfilePage.profile?.photos.large
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer)