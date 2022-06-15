import React from 'react';

const AboutUser = (props) => {
  return (
    <div className='AboutUser'>
      <section className="preview">
        <div className="preview__flex">
          <div className="preview__content">
            <h1 className="preview__title title">{props.Name}</h1>
            <div className="preview__text text">{props.aboutMe}</div>
            <div className="preview__btn">
              <a href="#" className="btn">Download Resume</a>
            </div>
          </div>
          <div className="preview__avatar">
            <img src={props.ava} alt="" />
          </div>
        </div>
      </section >
    </div >
  );
}
export default AboutUser;