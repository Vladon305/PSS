import { ResultCodes } from "../API/API"
import { authAPI } from "../API/authAPI"
import { InferActionsTypes, InferThunkType } from "./redux-store"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_AUTH_USER_PROFILE = 'auth/SET_AUTH_USER_PROFILE'

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  profile: null as any
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        isAuth: action.isAuth,
        ...action.payload,
      }
    case SET_AUTH_USER_PROFILE:
      return {
        ...state,
        profile: action.data
      }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (
    userId: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } } as const),

  setAuthUserProfile: (data: any) => ({ type: SET_AUTH_USER_PROFILE, data } as const)
}

export const getAuthUser = (): ThunkType => async (dispatch) => {
  const data = await authAPI.getAuthUser();
  if (data.resultCode === ResultCodes.Success) {
    let { id, login, email } = data.data
    dispatch(actions.setAuthUserData(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe)
  if (data.resultCode === ResultCodes.Success) {
    dispatch(getAuthUser())
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === ResultCodes.Success) {
    dispatch(getAuthUser())
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}

export type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = InferThunkType<ActionsTypes>

export default authReducer