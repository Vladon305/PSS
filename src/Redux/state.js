const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
  _callSubscriber() {
    console.log('no');
  },
  _state: {
    works: [{
      title: 'Designing Dashboards',
      data: '2020',
      category: 'Dashboard',
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: 'Vibrant Portraits of 2020',
      data: '2018',
      category: 'Illustration',
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: '36 Days of Malayalam type',
      data: '2018',
      category: 'Typography',
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }, {
      title: 'Designing Dashboards',
      data: '2020',
      category: 'Dashboard',
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }],
    posts: [{
      title: 'UI Interactions of the week',
      data: '12 Feb 2019 ',
      category: 'Express, Handlebars',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      title: 'Making a design system from scratch',
      data: '12 Feb 2020 ',
      category: 'Design, Pattern',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      title: 'Creating pixel perfect icons in Figma',
      data: '12 Feb 2020 ',
      category: 'Figma, Icon Design',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }],
    profilePage: {
    },
    worksPage: {
    },
    blogPage: {
      newValue: {
        newPostTitle: 'Add title',
        newPostCategory: 'Add category',
        newPostText: 'Add text'
      }
    },
    dialogsPage: {
      dialogs: [{

      }],
      massages: [{

      }]
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        title: this._state.blogPage.newValue.newPostTitle,
        category: this._state.blogPage.newValue.newPostCategory,
        text: this._state.blogPage.newValue.newPostText
      }
      this._state.posts.push(newPost)
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.blogPage.newValue.newPostTitle = action.newTitle;
      this._state.blogPage.newValue.newPostCategory = action.newCategory;
      this._state.blogPage.newValue.newPostText = action.newText;

      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (title, category, text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newTitle: title, newCategory: category, newText: text })

export default store;