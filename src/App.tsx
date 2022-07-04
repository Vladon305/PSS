import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import BlogContainer from './components/Blog/BlogContainer'
import Preloader from './components/common/Preloader/Preloader'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Footer from './components/Footer/Footer'
import FriendsContainer from './components/Friends/FriendsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer'
import SideBarContainer from './components/SideBar/SideBarContainer'
import Works from './components/Works/Works'
import { initializeApp } from './Redux/app-Reducer'
import { AppStateType } from './Redux/redux-store'

type MapDispatchType = {
  initializeApp: () => void
}

type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchType

const App: React.FC<PropsType> = ({ initialized, isAuth, works, initializeApp }) => {

  useEffect(() => {
    initializeApp()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!initialized) {
    return <Preloader />
  }
  return (
    <div className="App">
      <div className='wrapper'>
        <HeaderContainer />
        <div className={isAuth === true ? 'grid-wrapper' : 'grid-wrapper-without-sideBar'}>
          {isAuth ? <SideBarContainer /> : <></>}
          <div className='content'>
            <Routes>
              <Route path='/Profile/:userId' element={<ProfileContainer />} />
              <Route path='/Works' element={<Works works={works} />} />
              <Route path='/Blog' element={<BlogContainer />} />
              <Route path='/Dialogs' element={<DialogsContainer />} />
              <Route path='/Friends' element={<FriendsContainer />} />
              <Route path='/Login' element={<Login />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
  works: state.works
})

export default connect(mapStateToProps, { initializeApp })(App)
