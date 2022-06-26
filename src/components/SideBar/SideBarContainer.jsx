import SideBar from './SideBar';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import React from 'react';
import MenuIcon from './MenuIcon';
import { setProfileLink } from '../../Redux/sideBar-Reducer';
import { Navigate } from 'react-router-dom';

const SideBarContainer = ({ sideBar, userId, setProfileLink }) => {

  const [SideBarState, ChangeState] = useState({
    activeObject: null,
    MenuIcon: <MenuIcon />,
    SideBar: <SideBar />
  });
  const toggleActive = () => {
    if (!SideBarState.activeObject) {
      ChangeState({ ...SideBarState, activeObject: SideBarState.MenuIcon })
    } else {
      ChangeState({ ...SideBarState, activeObject: null })
    }
  };
  const toggleActiveStylesInSideBar = () => {
    if (SideBarState.MenuIcon === SideBarState.activeObject) {
      return 'SideBar _active'
    } else {
      return 'SideBar'
    }
  }
  const toggleActiveStylesInMenu = () => {
    if (SideBarState.MenuIcon === SideBarState.activeObject) {
      return 'menu-icon icon-menu _active'
    } else {
      return 'menu-icon icon-menu'
    }
  }

  useEffect(() => {
    const body = document.querySelector("body")
    if (SideBarState.activeObject) {
      body.classList.add("_lock")
    } else {
      body.classList.remove("_lock")
    }
  }, [SideBarState.activeObject])

  if (!userId) {
    return <Navigate to={'/Login'} />
  }
  return <>
    <MenuIcon
      toggleActive={toggleActive}
      toggleActiveStyles={toggleActiveStylesInMenu} />
    < SideBar
      sideBar={sideBar}
      toggleActiveStyles={toggleActiveStylesInSideBar}
      setProfileLink={setProfileLink}
      userId={userId} />
  </>

}

const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, setProfileLink)(SideBarContainer);