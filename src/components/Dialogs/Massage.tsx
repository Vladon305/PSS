import React from 'react'

type PropsType = {
  massage: string
}

const Massage: React.FC<PropsType> = ({ massage }) => {
  return (
    <div className='massage'>
      {massage}
    </div>
  )
}

export default Massage