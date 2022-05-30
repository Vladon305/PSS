const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case UPDATE_NEW_MASSAGE_BODY:
      state.newMassageBody = action.body;
      return state;

    case SEND_MASSAGE:
      let body = state.newMassageBody;
      state.newMassageBody = '';
      state.massages.push({ id: 6, massage: body });
      return state;

    default:
      return state;
  }
}

export const sendMassageCreator = () => ({ type: SEND_MASSAGE });
export const updateNewMassageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MASSAGE_BODY, body: body })


export default dialogsReducer;