import { ThunkAction } from 'redux-thunk'
import { getAuthUser } from './auth-Reducer'
import { AppStateType } from './redux-store'

const INITIALIZED = 'app/INITIALIZED'

export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case INITIALIZED:
      return { ...state, initialized: true }

    default:
      return state
  }
}

type ActionsType = InitializedSuccessActionType

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

type InitializedSuccessActionType = {
  type: typeof INITIALIZED
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED })

export const initializeApp = (): ThunkType => (dispatch) => {
  let promise = dispatch(getAuthUser())
  promise.then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer