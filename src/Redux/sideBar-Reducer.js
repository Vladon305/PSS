const SET_PROFILE_LINK = 'sideBar/SET_PROFILE_LINK';

let initialState = [
  { page: 'Profile', link: '/Profile/' },
  { page: 'Dialogs', link: '/Dialogs' },
  { page: 'Blog', link: '/Blog' },
  { page: 'Works', link: '/Works' },
  { page: 'Friends', link: '/Friends' }
];

const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_LINK:
      let profileLink = state[0].link
      return {
        ...state,
        link: profileLink + `${action.userId}`
      }
    default:
      return state
  }
}

export const setProfileLink = (userId) => ({ type: SET_PROFILE_LINK, userId })

export default sideBarReducer;