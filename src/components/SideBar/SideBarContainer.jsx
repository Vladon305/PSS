import SideBar from './SideBar';
import { connect } from "react-redux";
import { useState } from 'react';
import React from 'react';
import MenuIcon from './MenuIcon';

const SideBarContainer = (props) => {

  const [SideBarState, ChangeState] = useState({
    activeObgect: null,
    MenuIcon: <MenuIcon />,
    SideBar: <SideBar />
  });
  const toggleActive = () => {
    if (!SideBarState.activeObgect) {
      ChangeState({ ...SideBarState, activeObgect: SideBarState.MenuIcon })
    } else {
      ChangeState({ ...SideBarState, activeObgect: null })
    }
  };
  const toggleActiveStylesInSideBar = () => {
    if (SideBarState.MenuIcon === SideBarState.activeObgect) {
      return 'SideBar _active'
    } else {
      return 'SideBar'
    }
  }
  const toggleActiveStylesInMenu = () => {
    if (SideBarState.MenuIcon === SideBarState.activeObgect) {
      return 'menu-icon icon-menu _active'
    } else {
      return 'menu-icon icon-menu'
    }
  }
  if (SideBarState.activeObgect) {
    const body = document.querySelector("body")
    body.classList.add("_lock")
  } else {
    const body = document.querySelector("body")
    body.classList.remove("_lock")
  }
  return <>
    <MenuIcon toggleActive={toggleActive} toggleActiveStyles={toggleActiveStylesInMenu} />
    < SideBar sideBar={props.sideBar} toggleActiveStyles={toggleActiveStylesInSideBar} />
  </>

}

const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar
  }
}

export default connect(mapStateToProps)(SideBarContainer);