let initialState = [
  { page: 'Profile', link: '/Profile' },
  { page: 'Dialogs', link: '/Dialogs' },
  { page: 'Blog', link: '/Blog' },
  { page: 'Works', link: '/Works' },
  { page: 'Friends', link: '/Friends' }
];

const sideBarReducer = (state = initialState, action) => {
  return state
}

export default sideBarReducer;