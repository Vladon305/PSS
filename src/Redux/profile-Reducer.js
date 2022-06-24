import { profileAPI } from "../API/API";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfile(data))
    })
  }
}

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then(data => {
      dispatch(setUserStatus(data))
    })
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(data))
      }
    })
  }
}


export default profileReducer;