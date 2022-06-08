import { createStore } from "redux";
import { combineReducers } from "redux";
import dialogsReducer from './dialogs-Reducer';
import postsReducer from "./posts-Reduser";
import sideBarReduser from "./sideBar-reduser";
import worksReducer from "./works-Reducer";

let redusers = combineReducers({
  dialogsPage: dialogsReducer,
  posts: postsReducer,
  works: worksReducer,
  sideBar: sideBarReduser
});

let store = createStore(redusers);
window.store = store;

export default store;