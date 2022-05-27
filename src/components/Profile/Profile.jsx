import React from 'react';
import Works from '../Works/Works';
import AboutUser from './AboutUser';
import RecentPosts from './RecentPosts';
const Profile = () => {
  return (
    <div className='Profile'>
      <main className="page">
        <AboutUser />
        <RecentPosts />
        <section className="featured-works">
          <div className="conteiner">
            <div className="featured-works__title title-posts">Featured works</div>
            <div className="works">
              <Works />
              <Works />
              <Works />
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
export default Profile;