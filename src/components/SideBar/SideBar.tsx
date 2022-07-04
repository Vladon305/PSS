import React from 'react'
import { LinksType } from '../../types/types'
import Link from './Link'

type PropsType = {
  sideBar: LinksType[]
  toggleSideBar: boolean
}

const SideBar: React.FC<PropsType> = ({ sideBar, toggleSideBar }) => {
  return (
    <div className={toggleSideBar ? 'SideBar _active' : 'SideBar'}>
      <div className='SideBar__inner'>{
        sideBar.map(p => <div className='Link' key={p.page}><Link
          page={p.page}
          link={p.link}
          key={p.page} /></div>)}
      </div>
    </div>
  )
}

export default SideBar