import React from 'react'
import { WorkType } from '../../types/types'
import Work from './Work'

type PropsType = {
  works: WorkType[]
}

const Works: React.FC<PropsType> = ({ works }) => {
  return (
    <div className='works'>
      <main className="page">
        <div className="container">
          <h1 className="works__main-title title">Works</h1>
          {works
            .map(w => <Work title={w.title} data={w.data} category={w.category} text={w.text} key={w.id} />)}
        </div>
      </main>
    </div>
  )
}
export default Works