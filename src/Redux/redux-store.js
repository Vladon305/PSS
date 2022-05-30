import { createStore } from "redux";
import { combineReducers } from "redux";
import blogReducer from './blog-Reducer';
import dialogsReducer from './dialogs-Reducer';

let redusers = combineReducers({
  blogPage: blogReducer,
  dialogsPage: dialogsReducer
});

let store = createStore(redusers);

export default store;