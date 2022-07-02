import { ThunkAction } from "redux-thunk"
import { authAPI, ResultCodes } from "../API/API"
import { AppStateType } from "./redux-store"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_AUTH_USER_PROFILE = 'auth/SET_AUTH_USER_PROFILE'

export type InitialStateType = typeof initialState

let initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  profile: null as any
};

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

type ActionsType = SetAuthUserDataActionType | SetAuthUserProfile

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA, payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (
  userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType =>
  ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } })

type SetAuthUserProfile = {
  type: typeof SET_AUTH_USER_PROFILE
  data: any
}

export const setAuthUserProfile = (data: any): SetAuthUserProfile => ({ type: SET_AUTH_USER_PROFILE, data })

export const getAuthUser = (): ThunkType => async (dispatch) => {
  const data = await authAPI.getAuthUser();
  if (data.resultCode === ResultCodes.Success) {
    let { id, login, email } = data.data
    dispatch(setAuthUserData(id, login, email, true))
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
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer