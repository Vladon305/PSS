import React from 'react';

const Post = () => {
  return (
    <div className="blog__item recent-post">
      <a href="#" className="blog__article-name">UI Interactions of the week</a>
      <div className="blog__info">
        <div className="blog__data">12 Feb 2019 </div>
        <span className="blog__separator">|</span>
        <div className="blog__category">Express, Handlebars</div>
      </div>
      <div className="blog__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit
        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
    </div>
  );
}
export default Post;