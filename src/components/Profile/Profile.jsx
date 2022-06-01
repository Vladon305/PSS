import React from 'react';
import Work from '../Works/Work';
import AboutUser from './AboutUser';
import RecentPosts from './RecentPosts';

const Profile = (props) => {

  let workElements = props.state.works
    .map(w => <Work title={w.title} data={w.data} category={w.category} text={w.text} />);

  return (
    <div className='Profile'>
      <div className='wrapper'>
        <main className="page">
          <AboutUser />
          <RecentPosts posts={props.state.posts.posts} />
          <section className="featured-works">
            <div className="conteiner">
              <div className="featured-works__title title-posts">Featured works</div>
              <div className="works">
                {workElements}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div >
  );
}
export default Profile;