import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatus = ({ status, updateUserStatus }) => {

  const [editMode, changeEditMode] = useState(false)

  const [localStatus, setLocalStatus] = useState(status)

  const activateEditMode = () => {
    changeEditMode(true)
  }

  const deactivateEditMode = () => {
    changeEditMode(false)
    updateUserStatus(localStatus)
  }

  const setValue = (e) => {
    setLocalStatus(e.currentTarget.value)
  }

  useEffect(() => {
    if (localStatus !== status) {
      setLocalStatus(status)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    // <div className="preview__text text">{!aboutMe ? 'I`m creative developer' : aboutMe}</div>
    <>
      {!editMode
        ? <div className='profile__status'>
          <span onClick={activateEditMode} >{localStatus || '---------'}</span>
        </div>
        : <div className='profile__status'>
          <input autoFocus={true} onBlur={deactivateEditMode} onChange={setValue} type="text" value={localStatus} />
        </div>}
    </>
  );
}

export default ProfileStatus;