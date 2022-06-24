import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Work from '../Works/Work';
import AboutUserContainer from './AboutUser/AboutUserContainer';
import RecentPostsContainer from './RecentPostsContainer';

const Profile = ({ works, profile, status }) => {

  if (!profile) {
    return <Preloader />
  }
  return (
    <div className='Profile'>
      <main className="page">
        <div className="container">
          <AboutUserContainer />
          <RecentPostsContainer />
          <section className="featured-works">
            <div className="container">
              <div className="featured-works__title title-posts">Featured works</div>
              <div className="works">
                {works.map(w => <Work title={w.title} data={w.data} category={w.category} text={w.text} key={w.id} />)}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;