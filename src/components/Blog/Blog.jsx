import React from 'react';
import Post from './Post';

const Blog = () => {
  return (
    <div className='Blog'>
      <div className="wrapper">
        <div className="conteiner">
          <h1 className="blog__title title">Blog</h1>
          <div className="blog__items">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;