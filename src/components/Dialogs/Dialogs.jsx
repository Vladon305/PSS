import React from 'react';
import { sendMassageCreator, updateNewMassageBodyCreator } from '../../Redux/dialogs-Reducer';
import DialogsItem from './DialogItem';
import Massage from './Massage';

const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
  let massagesElement = props.state.massages.map(m => <Massage massage={m.massage} />)

  let onSendMassageClick = () => {
    props.dispatch(sendMassageCreator());
  }

  let onNewMassaeChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMassageBodyCreator(body))
  }
  return (
    <div className="conteiner">
      <div className='dialogs'>
        <div className='dialogsItems'>
          {dialogsElement}
        </div>
        <div className='massages'>
          {massagesElement}
          <div><textarea placeholder='Enter your massage' value={props.state.newMassageBody} onChange={onNewMassaeChange}></textarea></div>
          <div><button onClick={onSendMassageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;