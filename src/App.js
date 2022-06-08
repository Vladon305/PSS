import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogConteiner from './components/Blog/BlogConteiner';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import SideBarConteiner from './components/SideBar/SideBarConteiner';
import Works from './components/Works/Works';

const App = (props) => {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <div className='grid-wrapper'>
          <SideBarConteiner />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Profile state={props.state} />} />
              <Route path='/Works' element={<Works works={props.state.works} />} />
              <Route path='/Blog' element={<BlogConteiner />} />
              <Route path='/Dialogs' element={<DialogsConteiner />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
