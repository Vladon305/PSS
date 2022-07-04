import React from 'react'

type PropsType = {
  title: string
  data: string
  category: string
  text: string
}

const Work: React.FC<PropsType> = ({ title, data, category, text }) => {
  return (
    <article className="works__item">
      <p className="works__image _ibg">
        <img src="img/work01.png" alt="work 01" />
      </p>
      <div className="works__body">
        <p className="works__title">{title}</p>
        <div className="works__info">
          <div className="works__year">{data}</div>
          <div className="works__category">{category}</div>
        </div>
        <div className="works__text text">{text}</div>
      </div>
    </article>
  )
}
export default Work