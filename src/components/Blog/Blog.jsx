import React from 'react';
import AddPostFormContainer from '../AddPost/AddPostFormContainer';
import Post from './Post';

const Blog = (props) => {
  return (
    <div className='Blog'>
      <main className="page">
        <div className="container">
          <h1 className="blog__title title">Blog</h1>
          <AddPostFormContainer />
          <div className="blog__items">
            {props.posts.map(p => <Post
              title={p.title}
              data={p.data}
              category={p.category}
              text={p.text}
              key={p.id}
            />)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;