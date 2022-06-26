import { authAPI } from "../API/API";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_AUTH_USER_PROFILE = 'auth/SET_AUTH_USER_PROFILE';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        isAuth: action.isAuth,
        ...action.data,
      }
    case SET_AUTH_USER_PROFILE:
      return {
        ...state,
        profile: action.data
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } })

export const setAuthUserProfile = (data) => ({ type: SET_AUTH_USER_PROFILE, data })

export const getAuthUser = () => async (dispatch) => {
  const data = await authAPI.getAuthUser();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe)
  if (data.resultCode === 0) {
    dispatch(getAuthUser())
  }
}

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === 0) {
    dispatch(getAuthUser())
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer;