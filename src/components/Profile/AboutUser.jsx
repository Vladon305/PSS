import React from 'react';
import style from './AboutUser.moduls.scss'
const AboutUser = () => {
  return (
    <div className='AboutUser'>
      <section className={style.preview}>
        <div className={style.conteiner}>
          <div className={style.preview__flex}>
            <div className={style.preview__content}>
              <h1 className={style.preview__title}>Hi, I am Vlad,<br />
                Creative Technologist</h1>
              <div className={style.preview__text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
              <div className={style.preview__btn}>
                <a href="#" className={style.btn}>Download Resume</a>
              </div>
            </div>
            <div className={style.preview__avatar}>
              <img src="img/photo.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUser;