import React from 'react';
import ReactDOM from 'react-dom/client';
import './SCSS/style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>
);
