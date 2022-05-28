import React from 'react';
import Post from '../Blog/Post';

const RecentPosts = () => {
  return (
    <div className='RecentPosts'>
      <section className="recent-posts">
        <div className=" conteiner">
          <div className="recent-posts__header">
            <div className="recent-posts__title title-posts"> Recent posts</div>
            <a className="recent-posts__view-all">View all</a>
          </div>
          <div className="recent-posts__items">
            <div className="recent-posts__column">
              <Post />
            </div>
            <div className="recent-posts__column">
              <Post />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RecentPosts;