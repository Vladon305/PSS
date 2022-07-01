const SEND_MASSAGE = 'dialogs/SEND_MASSAGE'

export type InitialStateType = typeof initialState

type Dialog = {
  id: number
  name: string
}

type Massage = {
  id: number
  massage: string
}


let initialState = {
  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Dima' },
    { id: 4, name: 'Dima' },
    { id: 5, name: 'Dima' },
  ] as Array<Dialog>,
  massages: [
    { id: 1, massage: 'hi' },
    { id: 2, massage: 'yes' },
    { id: 3, massage: 'What do you say?' },
    { id: 4, massage: 'hi' },
    { id: 5, massage: 'hi' },
  ] as Array<Massage>
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case SEND_MASSAGE:
      let getNewId = () => {
        let massages = state.massages
        let lastMassage = massages[massages.length - 1]
        return lastMassage.id + 1
      };
      let body = action.newMassageBody
      return {
        ...state,
        massages: [...state.massages, { id: getNewId(), massage: body }],
      }

    default:
      return state
  }
}

type ActionsType = SendMassageActionType

export type SendMassageActionType = {
  type: typeof SEND_MASSAGE
  newMassageBody: string
}

export const sendMassage = (newMassageBody: string): SendMassageActionType => ({ type: SEND_MASSAGE, newMassageBody })

export default dialogsReducer