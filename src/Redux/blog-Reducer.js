const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  newValue: {
    id: 1,
    newPostTitle: 'Add title',
    newPostCategory: 'Add category',
    newPostText: 'Add text'
  }
};

let postsInitialState = [{
  id: 1,
  title: 'UI Interactions of the week',
  data: '12 Feb 2019 ',
  category: 'Express, Handlebars',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
},
{
  id: 2,
  title: 'Making a design system from scratch',
  data: '12 Feb 2020 ',
  category: 'Design, Pattern',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
},
{
  id: 3,
  title: 'Creating pixel perfect icons in Figma',
  data: '12 Feb 2020 ',
  category: 'Figma, Icon Design',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
}];

const blogReducer = (state = initialState, posts = postsInitialState, action) => {
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