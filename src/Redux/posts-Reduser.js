const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [{
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
  }],
  newValue: {
    newPostTitle: 'Add title',
    newPostCategory: 'Add category',
    newPostText: 'Add text'
  }
};

const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let date = new Date();
      let output = String(date.getDate()).padStart(2, '0') + ' ' + String(date.getMonth()).padStart(2, '0') + ' ' + date.getFullYear();
      let getLastId = () => {
        let Posts = state.posts;
        let lastPost = Posts[Posts.length - 1];
        return lastPost.id++
      };
      let newPost = {
        id: getLastId(),
        title: state.newValue.newPostTitle,
        data: output,
        category: state.newValue.newPostCategory,
        text: state.newValue.newPostText
      }
      return {
        ...state,
        newValue: {
          ...state.newValue,
          newPostTitle: '',
          newPostCategory: '',
          newPostText: ''
        },
        posts: [...state.posts, { ...newPost }]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newValue: {
          ...state.newValue,
          newPostTitle: action.newTitle,
          newPostCategory: action.newCategory,
          newPostText: action.newText
        }
      }

    default:
      return state;
  }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (title, category, text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newTitle: title, newCategory: category, newText: text })


export default postsReducer;