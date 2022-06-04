import React from 'react';
import Post from '../Blog/Post';

const RecentPosts = (props) => {

  function returnLastItem(arr) {
    return [arr[arr.length - 1]];
  }
  function returnPreLastItem(arr) {
    return [arr[arr.length - 2]];
  }
  let lastElement = returnLastItem(props.posts);
  let preLastElement = returnPreLastItem(props.posts);
  let postElement1 = lastElement.map(p => <Post title={p.title} data={p.data} category={p.category} text={p.text} key={p.id} />);
  let postElement2 = preLastElement.map(p => <Post title={p.title} data={p.data} category={p.category} text={p.text} key={p.id} />);


  return (
    <section className="recent-posts">
      <div className=" conteiner">
        <div className="recent-posts__header">
          <div className="recent-posts__title title-posts"> Recent posts</div>
          <a className="recent-posts__view-all">View all</a>
        </div>
        <div className="recent-posts__items">
          <div className="recent-posts__column">
            {postElement1}
          </div>
          <div className="recent-posts__column">
            {postElement2}
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecentPosts;