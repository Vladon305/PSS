import { WorkType } from '../types/types'

let initialState = [{
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
}] as Array<WorkType>

type InitialStateType = typeof initialState

const worksReducer = (state = initialState, action: any): InitialStateType => {
  return state
}

export default worksReducer