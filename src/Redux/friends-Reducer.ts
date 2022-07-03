import { followAPI } from "../API/followAPI"
import { usersAPI } from "../API/usersAPI"
import { updateObjectsInArray } from "../utils/objectsHelper"
import { UserType } from '../types/types'
import { InferActionsTypes, InferThunkType } from "./redux-store"
import { Dispatch } from "redux"

const ACCEPT_FOLLOW = 'friends/ACCEPT_FOLLOW'
const ACCEPT_UNFOLLOW = 'friends/ACCEPT_UNFOLLOW'
const SET_USERS = 'friends/SET_USERS'
const SET_PAGE = 'friends/SET_PAGE'
const SET_TOTAL_USERS_COUNT = 'friends/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'friends/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'friends/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  page: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>  //Array users id`s
}


const FriendsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ACCEPT_FOLLOW:
      return {
        ...state,
        users: updateObjectsInArray(state.users, action.userId, 'id', { followed: true })
      }

    case ACCEPT_UNFOLLOW:
      return {
        ...state,
        users: updateObjectsInArray(state.users, action.userId, 'id', { followed: false })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case SET_PAGE:
      return {
        ...state,
        page: action.page
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        //@ts-ignore
        followingInProgress: action.isFetching
          ? [state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(uId => uId !== action.userId)]
      }

    default:
      return state
  }
}

export const actions = {
  acceptFollow: (userId: number) => ({ type: ACCEPT_FOLLOW, userId } as const),
  acceptUnfollow: (userId: number) => ({ type: ACCEPT_UNFOLLOW, userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users } as const),
  setPage: (page: number) => ({ type: SET_PAGE, page } as const),
  setTotalUsersCount: (totalCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const)
}


export const getUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  }
}

const _followUnfollowFlow = async (dispatch: DispatchType, id: number,
  apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.toggleFollowingProgress(true, id))
  const data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(actions.toggleFollowingProgress(false, id))
}

export const follow = (id: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, id, followAPI.following.bind(followAPI), actions.acceptFollow)
  }
}

export const unfollow = (id: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, id, followAPI.unfollowing.bind(followAPI), actions.acceptUnfollow)
  }
}

type InitialStateType = typeof initialState

export type ActionsTypes = InferActionsTypes<typeof actions>

type DispatchType = Dispatch<ActionsTypes>

type ThunkType = InferThunkType<ActionsTypes>

export default FriendsReducer