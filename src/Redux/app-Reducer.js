import { getAuthUser } from './auth-Reducer';

const INITIALIZED = 'app/INITIALIZED'

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED:
      return { ...state, initialized: true }

    default:
      return state
  }
}

export const initializedSuccess = () => ({ type: INITIALIZED })

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUser())
  promise.then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer