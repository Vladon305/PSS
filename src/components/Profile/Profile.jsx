import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Work from '../Works/Work';
import AboutUserConteiner from './AboutUserConteiner';
import RecentPostsConteiner from './RecentPostsConteiner';

const Profile = ({ works, profile, ...props }) => {

  if (!profile) {
    return <Preloader />
  }
  return (
    <div className='Profile'>
      <main className="page">
        <div className="conteiner">
          <AboutUserConteiner />
          <RecentPostsConteiner />
          <section className="featured-works">
            <div className="conteiner">
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