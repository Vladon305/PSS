const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MASSAGE_BODY:
      return {
        ...state,
        newMassageBody: action.body
      }

    case SEND_MASSAGE:
      let body = state.newMassageBody;
      return {
        ...state,
        massages: [...state.massages, { id: 6, massage: body }],
        newMassageBody: ''
      }

    default:
      return state;
  }
}

export const sendMassageCreator = () => ({ type: SEND_MASSAGE });
export const updateNewMassageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MASSAGE_BODY, body: body })


export default dialogsReducer;