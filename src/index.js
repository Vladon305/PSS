import React from 'react';
import ReactDOM from 'react-dom/client';
import './SCSS/style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { subscribe, addPost, updateNewPostText } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

subscribe(reRenderEntireTree);

reRenderEntireTree(state);