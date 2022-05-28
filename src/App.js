import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Works from './components/Works/Works';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Profile state={props.state.profilePage} />} />
        <Route path='/Works' element={<Works state={props.state.worksPage} />} />
        <Route path='/Blog' element={<Blog state={props.state.blogPage} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
