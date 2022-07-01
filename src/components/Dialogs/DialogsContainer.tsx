import Dialogs from './Dialogs'
import { connect } from "react-redux"
import { sendMassage, SendMassageActionType } from '../../Redux/dialogs-Reducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOCs/withAuthRedirect'
import { AppStateType } from '../../Redux/redux-store'

export type MapStateType = ReturnType<typeof mapStateToProps>

export type MapDispatchType = {
  sendMassage: (newMassageBody: string) => SendMassageActionType
}

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    massages: state.dialogsPage.massages
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { sendMassage }))(Dialogs)