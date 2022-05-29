import React from 'react';
import ReactDOM from 'react-dom/client';
import './SCSS/style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

store.subscribe(reRenderEntireTree);

reRenderEntireTree(store.getState());