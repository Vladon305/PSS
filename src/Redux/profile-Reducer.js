import { profileAPI } from "../API/API";

const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

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
  return async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))
  }
}

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
  }
}

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  }
}


export default profileReducer;