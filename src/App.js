import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Works from './components/Works/Works';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
