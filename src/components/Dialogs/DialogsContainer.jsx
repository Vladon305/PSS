import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { sendMassage } from '../../Redux/dialogs-Reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOCs/withAuthRedirect';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    massages: state.dialogsPage.massages
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { sendMassage }))(Dialogs);