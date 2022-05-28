import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Work from '../Works/Work';
import Works from '../Works/Works';
import AboutUser from './AboutUser';
import RecentPosts from './RecentPosts';

const Profile = () => {
  return (
    <div className='Profile'>
      <div className='wrapper'>
        <main className="page">
          <AboutUser />
          <RecentPosts />
          <section className="featured-works">
            <div className="conteiner">
              <div className="featured-works__title title-posts">Featured works</div>
              <div className="works">
                <Work />
                <Work />
                <Work />
                <Work />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div >
  );
}
export default Profile;