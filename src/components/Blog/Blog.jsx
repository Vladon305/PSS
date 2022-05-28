import React from 'react';
import Post from './Post';

const Blog = (props) => {
  let postElement = props.state.posts.map(p => <Post title={p.title} data={p.data} category={p.category} text={p.text} />)
  return (
    <div className='Blog'>
      <div className="wrapper">
        <main className="page">
          <div className="conteiner">
            <h1 className="blog__title title">Blog</h1>
            <div className="blog__items">
              {postElement}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Blog;