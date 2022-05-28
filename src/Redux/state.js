let reRenderEntireTree = () => {
  console.log('no');
}

let state = {
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
  }
}

export const subscribe = (observer) => {
  reRenderEntireTree = observer;
}
export let addPost = (postMessage) => {
  let newPost = {
    title: postMessage.title,
    category: postMessage.category,
    text: postMessage.text
  }
  state.posts.push(newPost)
  state.newPost = '';
  reRenderEntireTree(state);
}
export let updateNewPostText = (newText = '') => {
  let newPostText = {
    title: newText.title,
    category: newText.category,
    text: newText.text
  }
  state.blogPage.newValue = newPostText;
  reRenderEntireTree(state);
}

export default state;