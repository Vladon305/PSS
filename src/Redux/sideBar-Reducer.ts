import { LinksType } from "../types/types";

const SET_PROFILE_LINK = 'sideBar/SET_PROFILE_LINK';

let initialState = [
  { page: 'Profile', link: '/Profile/' } as LinksType,
  { page: 'Dialogs', link: '/Dialogs' } as LinksType,
  { page: 'Blog', link: '/Blog' } as LinksType,
  { page: 'Works', link: '/Works' } as LinksType,
  { page: 'Friends', link: '/Friends' } as LinksType
];

type InitialStateType = typeof initialState

const sideBarReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_PROFILE_LINK:
      // let profileLink = state[0].link
      return {
        ...state,
        // link: profileLink + `${action.userId}`
      }
    default:
      return state
  }
}

type SetProfileLink = {
  type: typeof SET_PROFILE_LINK
  userId: number
}

export const setProfileLink = (userId: number): SetProfileLink => ({ type: SET_PROFILE_LINK, userId })

export default sideBarReducer;