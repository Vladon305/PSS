import blogReducer from "./blog-Reducer";
import dialogsReducer from "./dialogs-Reducer";

let store = {
  _callSubscriber() {
    console.log('no');
  },
  _state: {
    works: [{
      id: 1,
      title: 'Designing Dashboards',
      data: '2020',
      category: 'Dashboard',
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      data: '2018',
      category: 'Illustration',
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      data: '2018',
      category: 'Typography',
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }, {
      id: 4,
      title: 'Designing Dashboards',
      data: '2020',
      category: 'Dashboard',
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }],
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
    profilePage: {
    },
    worksPage: {
    },
    blogPage: {
      newValue: {
        id: 1,
        newPostTitle: 'Add title',
        newPostCategory: 'Add category',
        newPostText: 'Add text'
      }
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Dima' },
        { id: 5, name: 'Dima' },
      ],
      massages: [
        { id: 1, massage: 'hi' },
        { id: 2, massage: 'yes' },
        { id: 3, massage: 'What do you say?' },
        { id: 4, massage: 'hi' },
        { id: 5, massage: 'hi' },
      ],
      newMassageBody: ''
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    blogReducer(this._state.blogPage, this._state.posts, action);

    dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state);

  },
}

export default store;