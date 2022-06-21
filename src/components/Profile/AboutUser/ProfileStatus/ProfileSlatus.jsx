import React from 'react';
import { useState } from 'react';

const ProfileStatus = ({ status }) => {

  const [editMode, changeEditMode] = useState(false)

  const activateEditMode = () => {
    changeEditMode(true)
  }

  const deactivateEditMode = () => {
    changeEditMode(false)
  }

  const setValue = () => {

  }

  return (
    // <div className="preview__text text">{!aboutMe ? 'I`m creative developer' : aboutMe}</div>
    <>
      {!editMode
        ? <div>
          <span onDoubleClick={activateEditMode} >{status}</span>
        </div>
        : <div>
          <input autoFocus={true} onBlur={deactivateEditMode} onChange={setValue} type="text" value={status} />
        </div>}
    </>
  );
}

export default ProfileStatus;