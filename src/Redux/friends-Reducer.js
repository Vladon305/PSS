import { followAPI, usersAPI } from "../API/API";

const ACCEPT_FOLLOW = 'ACCEPT_FOLLOW';
const ACCEPT_UNFOLLOW = 'ACCEPT_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCEPT_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }

    case ACCEPT_UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
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

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowingProgress = (following, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, following, userId })

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    followAPI.following(id).then(data => {
      if (data.resultCode === 0) {
        dispatch(acceptFollow(id))
      }
      dispatch(toggleFollowingProgress(false, id))
    })
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    followAPI.unfollowing(id).then(data => {
      if (data.resultCode === 0) {
        dispatch(acceptUnfollow(id))
      }
      dispatch(toggleFollowingProgress(false, id))
    })
  }
}


export default FriendsReducer;