import { applyMiddleware, compose, createStore } from "redux"
import { combineReducers } from "redux"
import dialogsReducer from './dialogs-Reducer'
import friendsReducer from "./friends-Reducer"
import postsReducer from "./posts-Reducer"
import sideBarReducer from "./sideBar-Reducer"
import worksReducer from "./works-Reducer"
import profileReducer from "./profile-Reducer"
import authReducer from "./auth-Reducer"
import thunkMiddleware from "redux-thunk"
import appReducer from "./app-Reducer"

let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  posts: postsReducer,
  works: worksReducer,
  sideBar: sideBarReducer,
  FriendsPage: friendsReducer,
  ProfilePage: profileReducer,
  auth: authReducer,
  app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store