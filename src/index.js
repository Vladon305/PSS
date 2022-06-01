import React from 'react';
import ReactDOM from 'react-dom/client';
import './SCSS/style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

store.subscribe(reRenderEntireTree);

reRenderEntireTree(store.getState());