import { followAPI, usersAPI } from "../API/API";
import { updateObjectsInArray } from "../utils/objectsHelper";
import { UserType } from '../types/types';

const ACCEPT_FOLLOW = 'friends/ACCEPT_FOLLOW';
const ACCEPT_UNFOLLOW = 'friends/ACCEPT_UNFOLLOW';
const SET_USERS = 'friends/SET_USERS';
const SET_PAGE = 'friends/SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'friends/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'friends/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'friends/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  page: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>  //Array users id`s
}

type InitialStateType = typeof initialState

const FriendsReducer = (state = initialState, action: any): InitialStateType => {
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
        followingInProgress: action.isFetching
          ? [state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(uId => uId !== action.userId)]
      }

    default:
      return state;
  }
}

type AcceptFollowActionType = {
  type: typeof ACCEPT_FOLLOW
  userId: number
}

export const acceptFollow = (userId: number): AcceptFollowActionType => ({ type: ACCEPT_FOLLOW, userId })

type AcceptUnfollowActionType = {
  type: typeof ACCEPT_UNFOLLOW
  userId: number
}

export const acceptUnfollow = (userId: number): AcceptUnfollowActionType => ({ type: ACCEPT_UNFOLLOW, userId })

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })

type SetPageActionType = {
  type: typeof SET_PAGE
  page: number
}

export const setPage = (page: number): SetPageActionType => ({ type: SET_PAGE, page })

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalCount: number
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch: any, id: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, id))
  const data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(toggleFollowingProgress(false, id))
}

export const follow = (id: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(dispatch, id, followAPI.following.bind(followAPI), acceptFollow)
  }
}

export const unfollow = (id: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(dispatch, id, followAPI.unfollowing.bind(followAPI), acceptUnfollow)
  }
}


export default FriendsReducer;