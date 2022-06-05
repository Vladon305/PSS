import React from 'react';

const AboutUser = () => {
  return (
    <div className='AboutUser'>
      <section className="preview">
        <div className="preview__flex">
          <div className="preview__content">
            <h1 className="preview__title title">Hi, I am Vlad,
              Creative Technologist</h1>
            <div className="preview__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            <div className="preview__btn">
              <a href="#" className="btn">Download Resume</a>
            </div>
          </div>
          <div className="preview__avatar">
            <img src="img/photo.jpg" alt="" />
          </div>
        </div>
      </section >
    </div >
  );
}
export default AboutUser;