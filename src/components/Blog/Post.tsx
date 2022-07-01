import React from 'react'
import { PostType } from '../../types/types'

const Post: React.FC<PostType> = ({ title, data, category, text, id }) => {
  return (
    <div className="blog__item recent-post">
      <p className="blog__article-name">{title}</p>
      <div className="blog__info">
        <div className="blog__data">{data}</div>
        <span className="blog__separator">|</span>
        <div className="blog__category">{category}</div>
      </div>
      <div className="blog__text text">{text}</div>
    </div>
  )
}
export default Post