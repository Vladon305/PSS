import AboutUser from './AboutUser';
import { connect, ConnectedProps } from "react-redux";
import { updateUserStatus } from '../../../Redux/profile-Reducer'
import { AppStateType } from '../../../Redux/redux-store';
import { PhotosType } from '../../../types/types';

const AboutUserContainer = (props: Props) => {
  return <AboutUser {...props} />
}

type mapStateToPropsType = {
  fullName: string
  ava: PhotosType
  status: string
  initialized: boolean
  userId: number
  profileId: number
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

const connector = connect(mapStateToProps, { updateUserStatus })

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

export default connector(AboutUserContainer);