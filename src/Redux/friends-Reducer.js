import { followAPI, usersAPI } from "../API/API";
import { updateObjectsInArray } from "../utils/objectsHelper";

const ACCEPT_FOLLOW = 'friends/ACCEPT_FOLLOW';
const ACCEPT_UNFOLLOW = 'friends/ACCEPT_UNFOLLOW';
const SET_USERS = 'friends/SET_USERS';
const SET_PAGE = 'friends/SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'friends/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'friends/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'friends/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  page: 1,
  isFetching: true,
  followingInProgress: []
};

const FriendsReducer = (state = initialState, action) => {
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
        followingInProgress: action.following
          ? [state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(uId => uId !== action.userId)]
      }

    default:
      return state;
  }
}

export const acceptFollow = (userId) => ({ type: ACCEPT_FOLLOW, userId })

export const acceptUnfollow = (userId) => ({ type: ACCEPT_UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setPage = (page) => ({ type: SET_PAGE, page })

export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowingProgress = (following, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, following, userId })

export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, id))
  const data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(toggleFollowingProgress(false, id))
}

export const follow = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, id, followAPI.following.bind(followAPI), acceptFollow)
  }
}

export const unfollow = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, id, followAPI.unfollowing.bind(followAPI), acceptUnfollow)
  }
}


export default FriendsReducer;