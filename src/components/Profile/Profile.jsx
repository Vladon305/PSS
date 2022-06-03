import React from 'react';
import Work from '../Works/Work';
import AboutUser from './AboutUser';
import RecentPostsConteiner from './RecentPostsConteiner';

const Profile = (props) => {

  let workElements = props.state.works
    .map(w => <Work title={w.title} data={w.data} category={w.category} text={w.text} key={w.id} />);

  return (
    <div className='Profile'>
      <div className='wrapper'>
        <main className="page">
          <AboutUser />
          <RecentPostsConteiner />
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