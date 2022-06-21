import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { sendMassage, updateNewMassageBody } from '../../Redux/dialogs-Reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOCs/withAuthRedirect';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    sendMassage,
    updateNewMassageBody
  }))(Dialogs);