import { profileAPI } from "../API/profileAPI"
import { ProfileType } from "../types/types"
import { InferActionsTypes, InferThunkType } from './redux-store'

const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'

let initialState = {
  profile: null as ProfileType | null,
  status: ''
}

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
      return state
  }
}

export const actions = {
  setUserProfile: (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const),
  setUserStatus: (status: string) => ({ type: SET_USER_STATUS, status } as const)
}

export const getUserProfile = (userId: number): ThunkType => {
  return async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId)
    dispatch(actions.setUserProfile(data))
  }
}

export const getUserStatus = (userId: number): ThunkType => {
  return async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId)
    dispatch(actions.setUserStatus(data))
  }
}

export const updateUserStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(actions.setUserStatus(status))
    }
  }
}

export type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = InferThunkType<ActionsTypes>

export default profileReducer