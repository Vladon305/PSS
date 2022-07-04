import SideBar from './SideBar';
import { connect } from "react-redux"
import { ReactElement, useState } from 'react'
import React from 'react'
import MenuIcon from './MenuIcon'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../../Redux/redux-store'
import { LinksType } from '../../types/types'
import { compose } from 'redux';

type PropsType = {
  sideBar: LinksType[]
  userId: number | null
}

const SideBarContainer: React.FC<PropsType> = ({ sideBar, userId }) => {

  const [toggleSideBar, setToggleSideBar] = useState(false)

  // useEffect(() => {
  //   const body = document.querySelector("body")
  //   if (SideBarState.activeObject) {
  //     body.classList.add("_lock")
  //   } else {
  //     body.classList.remove("_lock")
  //   }
  // }, [SideBarState.activeObject])

  if (!userId) {
    return <Navigate to={'/Login'} />
  }
  return <>
    <MenuIcon
      setToggleSideBar={setToggleSideBar}
      toggleSideBar={toggleSideBar}
    />
    < SideBar
      sideBar={sideBar}
      toggleSideBar={toggleSideBar}
    // userId={userId} 
    />
  </>

}

const mapStateToProps = (state: AppStateType) => {
  return {
    sideBar: state.sideBar,
    userId: state.auth.userId
  }
}

export default compose<ReactElement>(connect(mapStateToProps)(SideBarContainer))