import React from 'react'
import DialogsItem from './DialogItem'
import Massage from './Massage'
import { useForm, SubmitHandler } from 'react-hook-form'
import { InitialStateType } from '../../Redux/dialogs-Reducer'

type FormValuesType = {
  newMassageBody: string
}

type PropsType = {
  sendMassage: (newMassageBody: string) => void
}

const Dialogs: React.FC<InitialStateType & PropsType> = ({ dialogs, massages, sendMassage }) => {

  const { register, handleSubmit } = useForm<FormValuesType>({
    mode: 'onChange'
  })

  const addNewMassage: SubmitHandler<FormValuesType> = ({ newMassageBody }) => {
    sendMassage(newMassageBody)
  }

  return (
    <div className="Dialogs">
      <div className="container">
        <div className='dialogs'>
          <div className='dialogsItems'>
            {dialogs.map(d => <DialogsItem name={d.name} key={d.id} />)} {/*id={d.id} ?*/}
          </div>
          <div className='massages'>
            <div className='massages-inner'>{massages.map(m => <Massage massage={m.massage} key={m.id} />)}</div>
            <div className='sendMassage'>
              <form onSubmit={handleSubmit(addNewMassage)}>
                <div className='textarea'>
                  <input
                    {...register('newMassageBody')}
                    type="text"
                    placeholder='Enter your massage' />
                </div>
                <div>
                  <button>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs