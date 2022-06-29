import AboutUser from './AboutUser';
import { connect } from "react-redux";
import { updateUserStatus } from '../../../Redux/profile-Reducer'
import { AppStateType } from '../../../Redux/redux-store';
import { PhotosType } from '../../../types/types';

type mapStateToPropsType = {
  fullName: string
  ava: PhotosType
  status: string
  initialized: boolean
  userId: number
  profileId: number
}

type MapDispatchToPropsType = {
  updateUserStatus: (newStatus: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    // @ts-ignore
    fullName: state.ProfilePage.profile.fullName,
    // @ts-ignore
    ava: state.ProfilePage.profile.photos,
    status: state.ProfilePage.status,
    initialized: state.app.initialized,
    // @ts-ignore
    userId: state.auth.userId,
    // @ts-ignore
    profileId: state.ProfilePage.profile.userId
  }
}

export default connect<mapStateToPropsType, MapDispatchToPropsType>(mapStateToProps, { updateUserStatus })(AboutUser);