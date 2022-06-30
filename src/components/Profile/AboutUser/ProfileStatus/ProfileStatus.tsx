import React, { ChangeEvent } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

type PropsType = {
  status: string
  updateUserStatus: (newStatus: string) => void
  userId: number
  profileId: number
}

const ProfileStatus: React.FC<PropsType> = ({ status, updateUserStatus, userId, profileId }) => {

  const [editMode, changeEditMode] = useState(false)

  const [localStatus, setLocalStatus] = useState(status)

  const activateEditMode = () => {
    changeEditMode(true)
  }

  const deactivateEditMode = () => {
    changeEditMode(false)
    updateUserStatus(localStatus)
  }

  const setValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(e.currentTarget.value)
  }

  useEffect(() => {
    if (localStatus !== status) {
      setLocalStatus(status)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])
  return (
    // <div className="preview__text text">{!aboutMe ? 'I`m creative developer' : aboutMe}</div>
    <>
      {userId === profileId
        ? !editMode
          ? <div className='profile__status'>
            <span onDoubleClick={activateEditMode} >{localStatus || '---------'}</span>
          </div>
          : <div className='profile__status'>
            <input autoFocus={true} onBlur={deactivateEditMode} onChange={setValue} type="text" value={localStatus} />
          </div>
        : <div className='profile__status'>
          <span>{localStatus || '---------'}</span>
        </div>}
    </>
  )
}

export default ProfileStatus