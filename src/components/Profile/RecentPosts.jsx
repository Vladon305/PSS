import React from 'react';
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
              <article className="recent-posts__item recent-post">
                <a href="#" className="recent-post__title">Making a design system from scratch</a>
                <div className="recent-post__info">12 Feb 2020 <span>|</span> Design, Pattern</div>
                <div className="recent-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
              </article>
            </div>
            <div className="recent-posts__column">
              <article className="recent-posts__item recent-post">
                <a href="#" className="recent-post__title">Creating pixel perfect icons in Figma</a>
                <div className="recent-post__info">12 Feb 2020 <span>|</span> Figma, Icon Design</div>
                <div className="recent-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RecentPosts;