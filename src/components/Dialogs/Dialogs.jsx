import React from 'react';
import DialogsItem from './DialogItem';
import Massage from './Massage';

const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />)
  let massagesElement = props.state.massages.map(m => <Massage massage={m.massage} key={m.id} />)

  let onSendMassageClick = () => {
    props.sendMassage();
  }

  let onNewMassageChange = (e) => {
    let body = e.target.value;
    props.updateNewMassageBody(body)
  }
  return (
    <div className="Diadlogs">
      <div className="conteiner">
        <div className='dialogs'>
          <div className='dialogsItems'>
            {dialogsElement}
          </div>
          <div className='massages'>
            {massagesElement}
            <div><textarea placeholder='Enter your massage' value={props.state.newMassageBody} onChange={onNewMassageChange}></textarea></div>
            <div><button onClick={onSendMassageClick}>Send</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;