import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { sendMassage, updateNewMassageBody } from '../../Redux/dialogs-Reducer';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

const DialogsContainer = connect(mapStateToProps, {
  sendMassage,
  updateNewMassageBody
})(Dialogs);

export default DialogsContainer;