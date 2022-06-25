import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import BlogContainer from './components/Blog/BlogContainer';
import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import FriendsContainer from './components/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import Works from './components/Works/Works';
import { getAuthUser } from './Redux/auth-Reducer';

class App extends React.Component {

  componentDidMount() {
    this.props.getAuthUser()
  }
  render() {
    if (!this.props.initialized) {
      <Preloader />
    }
    return (
      <div className="App">
        <div className='wrapper'>
          <HeaderContainer />
          <div className='grid-wrapper'>
            <SideBarContainer />
            <div className='content'>
              <Routes>
                <Route path='/Profile/:userId' element={<ProfileContainer />} />
                <Route path='/Works' element={<Works works={this.props.state.works} />} />
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
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { getAuthUser })(App);
