import { PostType } from "../types/types"
import { InferActionsTypes } from "./redux-store"

const ADD_POST = 'posts/ADD-POST'

let initialState = {
  posts: [{
    id: 1,
    title: 'UI Interactions of the week',
    data: '12 Feb 2019 ',
    category: 'Express, Handlebars',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  } as PostType,
  {
    id: 2,
    title: 'Making a design system from scratch',
    data: '12 Feb 2020 ',
    category: 'Design, Pattern',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  } as PostType,
  {
    id: 3,
    title: 'Creating pixel perfect icons in Figma',
    data: '12 Feb 2020 ',
    category: 'Figma, Icon Design',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Veli officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  } as PostType]
}


const postsReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case ADD_POST:
      let date = new Date()
      let output = String(date.getDate()).padStart(2, '0') + ' ' + String(date.getMonth() + 1).padStart(2, '0') + ' ' + date.getFullYear()
      let getNewId = () => {
        let posts = state.posts
        let lastPost = posts[posts.length - 1]
        return lastPost.id + 1
      };
      let newPost = {
        id: getNewId(),
        title: action.title,
        data: output,
        category: action.category,
        text: action.text
      }
      return {
        ...state,
        posts: [...state.posts, { ...newPost }]
      }
    default:
      return state
  }
}

export const actions = {
  addPost: (title: string, category: string, text: string) => ({ type: ADD_POST, title, category, text } as const)
}

type ActionsType = InferActionsTypes<typeof actions>

type InitialStateType = typeof initialState

export default postsReducer