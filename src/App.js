import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Works from './components/Works/Works';

const App = (props) => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Profile state={props.state} />} />
        <Route path='/Works' element={<Works works={props.state.works} />} />
        <Route path='/Blog' element={
          <Blog
            posts={props.state.posts}
            newValue={props.state.blogPage.newValue}
            dispatch={props.dispatch} />} />
        <Route path='/Dialogs' element={<Dialogs state={props.state.dialogsPage} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
