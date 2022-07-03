import { getAuthUser } from './auth-Reducer'
import { InferActionsTypes, InferThunkType } from './redux-store'

const INITIALIZED = 'app/INITIALIZED'

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case INITIALIZED:
      return { ...state, initialized: true }

    default:
      return state
  }
}


export const actions = {
  initializedSuccess: () => ({ type: INITIALIZED } as const)
}

export const initializeApp = (): ThunkType => (dispatch) => {
  let promise = dispatch(getAuthUser())
  promise.then(() => {
    dispatch(actions.initializedSuccess())
  })
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = InferThunkType<ActionsTypes, void>

export default appReducer