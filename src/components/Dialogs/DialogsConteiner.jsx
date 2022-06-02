import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { sendMassageCreator, updateNewMassageBodyCreator } from '../../Redux/dialogs-Reducer';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMassage: () => dispatch(sendMassageCreator()),
    updateNewMassageBody: (body) => {
      dispatch(updateNewMassageBodyCreator(body))
    }
  }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;