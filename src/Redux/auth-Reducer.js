import { authAPI } from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  profile: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
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

export const setAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } })

export const setAuthUserProfile = (data) => ({ type: SET_AUTH_USER_PROFILE, data })

export const getAuthUser = () => {
  return (dispatch) => {
    authAPI.getAuthUser().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email))
      }
    })
  }
}


export default authReducer;