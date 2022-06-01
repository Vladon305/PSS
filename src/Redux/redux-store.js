import { createStore } from "redux";
import { combineReducers } from "redux";
import blogReducer from './blog-Reducer';
import dialogsReducer from './dialogs-Reducer';
import postsReducer from "./posts-Reduser";
import worksReducer from "./works-Reducer";

let redusers = combineReducers({
  dialogsPage: dialogsReducer,
  posts: postsReducer,
  works: worksReducer
});

let store = createStore(redusers);

export default store;