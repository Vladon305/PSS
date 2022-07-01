import React from 'react'

type PropsType = {
  name: string
}

const DialogsItem: React.FC<PropsType> = ({ name }) => {
  return (
    <div className='dialogsItem'>
      {name}
    </div>
  )
}

export default DialogsItem