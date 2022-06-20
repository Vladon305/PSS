import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogContainer from './components/Blog/BlogContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import FriendsContainer from './components/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import Works from './components/Works/Works';

const App = (props) => {
  return (
    <div className="App">
      <div className='wrapper'>
        <HeaderContainer />
        <div className='grid-wrapper'>
          <SideBarContainer />
          <div className='content'>
            <Routes>
              <Route path='/Profile/:userId' element={<ProfileContainer />} />
              <Route path='/Works' element={<Works works={props.state.works} />} />
              <Route path='/Blog' element={<BlogContainer />} />
              <Route path='/Dialogs' element={<DialogsContainer />} />
              <Route path='/Friends' element={<FriendsContainer />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
