import { profileAPI } from "../API/API";
import { ProfileType } from "../types/types";

const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

export type InitialStateType = typeof initialState

let initialState = {
  profile: null as ProfileType | null,
  status: ''
};

const profileReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId: number) => {
  return async (dispatch: any) => {
    const data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))
  }
}

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}

export const setUserStatus = (status: string): SetUserStatusActionType => ({ type: SET_USER_STATUS, status })

export const getUserStatus = (userId: number) => {
  return async (dispatch: any) => {
    const data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
  }
}

export const updateUserStatus = (status: string) => {
  return async (dispatch: any) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  }
}


export default profileReducer;