import Dialogs from './Dialogs'
import { connect } from "react-redux"
import { actions } from '../../Redux/dialogs-Reducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOCs/withAuthRedirect'
import { AppStateType } from '../../Redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    massages: state.dialogsPage.massages
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { sendMassage: actions.sendMassage }))(Dialogs) as React.ComponentType