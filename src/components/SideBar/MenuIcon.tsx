import React, { Dispatch, SetStateAction } from 'react'

type PropsType = {
  toggleSideBar: boolean
  setToggleSideBar: Dispatch<SetStateAction<boolean>>
}

const MenuIcon: React.FC<PropsType> = ({ toggleSideBar, setToggleSideBar }) => {

  const toggleActive = () => {
    toggleSideBar ? setToggleSideBar(false) : setToggleSideBar(true)
  }

  return (
    <div className='menu' onClick={toggleActive} >
      <div className={toggleSideBar ? 'menu-icon icon-menu _active' : 'menu-icon icon-menu'} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default MenuIcon