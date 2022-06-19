import { createStore } from "redux";
import { combineReducers } from "redux";
import dialogsReducer from './dialogs-Reducer';
import FriendsReducer from "./friends-Reducer";
import postsReducer from "./posts-Reducer";
import sideBarReducer from "./sideBar-Reducer";
import worksReducer from "./works-Reducer";
import profileReducer from "./profile-Reducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  posts: postsReducer,
  works: worksReducer,
  sideBar: sideBarReducer,
  FriendsPage: FriendsReducer,
  ProfilePage: profileReducer
});

let store = createStore(reducers);
window.store = store;

export default store;