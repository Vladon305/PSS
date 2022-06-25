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
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MASSAGE:
      let getNewId = () => {
        let massages = state.massages;
        let lastMassage = massages[massages.length - 1];
        return lastMassage.id + 1
      };
      let body = action.newMassageBody;
      return {
        ...state,
        massages: [...state.massages, { id: getNewId(), massage: body }],
      }

    default:
      return state;
  }
}

export const sendMassage = (newMassageBody) => ({ type: SEND_MASSAGE, newMassageBody });

export default dialogsReducer;