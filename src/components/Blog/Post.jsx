import React from 'react';

const Post = (props) => {
  return (
    <div className="blog__item recent-post">
      <a href="#" className="blog__article-name">{props.title}</a>
      <div className="blog__info">
        <div className="blog__data">{props.data}</div>
        <span className="blog__separator">|</span>
        <div className="blog__category">{props.category}</div>
      </div>
      <div className="blog__text text">{props.text}</div>
    </div>
  );
}
export default Post;