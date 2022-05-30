const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const blogReducer = (state, posts, action) => {
  debugger
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        title: state.newValue.newPostTitle,
        category: state.newValue.newPostCategory,
        text: state.newValue.newPostText
      }
      state.newValue.newPostTitle = '';
      state.newValue.newPostCategory = '';
      state.newValue.newPostText = '';
      posts.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newValue.newPostTitle = action.newTitle;
      state.newValue.newPostCategory = action.newCategory;
      state.newValue.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (title, category, text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newTitle: title, newCategory: category, newText: text })

export default blogReducer;