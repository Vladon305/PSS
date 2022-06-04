import SideBar from './SideBar';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar
  }
}
const SideBarConteiner = connect(mapStateToProps)(SideBar);

export default SideBarConteiner;