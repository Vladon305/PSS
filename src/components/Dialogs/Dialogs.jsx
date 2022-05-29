import React from 'react';
import Massages from './Massages';

const Dialogs = (props) => {
  return (
    <div className='dialogs'>
      <Massages massages={props.state.massages} />
    </div>
  );
}

export default Dialogs;