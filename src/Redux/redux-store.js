import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import dialogsReducer from './dialogs-Reducer';
import FriendsReducer from "./friends-Reducer";
import postsReducer from "./posts-Reducer";
import sideBarReducer from "./sideBar-Reducer";
import worksReducer from "./works-Reducer";
import profileReducer from "./profile-Reducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  posts: postsReducer,
  works: worksReducer,
  sideBar: sideBarReducer,
  FriendsPage: FriendsReducer,
  ProfilePage: profileReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;