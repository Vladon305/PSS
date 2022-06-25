import React from 'react';
import DialogsItem from './DialogItem';
import Massage from './Massage';
import { reduxForm, Field } from 'redux-form';

const Dialogs = ({ dialogs, massages, sendMassage }) => {

  let addNewMassage = (values) => {
    sendMassage(values.newMassageBody);
  }

  return (
    <div className="Dialogs">
      <div className="container">
        <div className='dialogs'>
          <div className='dialogsItems'>
            {dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />)}
          </div>
          <div className='massages'>
            <div className='massages-inner'>{massages.map(m => <Massage massage={m.massage} key={m.id} />)}</div>
            <div className='sendMassage'>
              <AddMassageFormRedux onSubmit={addNewMassage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AddMassageForm = ({ handleSubmit }) => {
  return <form onSubmit={handleSubmit}>
    <div className='textarea'>
      <Field component={'input'} name='newMassageBody' placeholder='Enter your massage' />
    </div>
    <div>
      <button>Send</button>
    </div>
  </form>
}

const AddMassageFormRedux = reduxForm({
  form: 'dialogAddMassageForm'
})(AddMassageForm)

export default Dialogs;