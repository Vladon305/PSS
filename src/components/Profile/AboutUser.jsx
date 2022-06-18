import React from 'react';

const AboutUser = ({ fullName, aboutMe, ava }) => {
  return (
    <div className='AboutUser'>
      <section className="preview">
        <div className="preview__flex">
          <div className="preview__content">
            <h1 className="preview__title title">{fullName}</h1>
            <div className="preview__text text">{aboutMe}</div>
            <div className="preview__btn">
              <button className="btn">Download Resume</button>
            </div>
          </div>
          <div className="preview__avatar">
            <img src={ava} alt="" />
          </div>
        </div>
      </section >
    </div >
  );
}
export default AboutUser;