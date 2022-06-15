import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Work from '../Works/Work';
import AboutUser from './AboutUser';
import RecentPostsConteiner from './RecentPostsConteiner';

const Profile = (props) => {

  let workElements = props.works
    .map(w => <Work title={w.title} data={w.data} category={w.category} text={w.text} key={w.id} />);

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className='Profile'>
      <main className="page">
        <div className="conteiner">
          <AboutUser aboutMe={props.profile.aboutMe} Name={props.profile.fullName} ava={props.profile.photos.large} />
          <RecentPostsConteiner />
          <section className="featured-works">
            <div className="conteiner">
              <div className="featured-works__title title-posts">Featured works</div>
              <div className="works">
                {workElements}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;