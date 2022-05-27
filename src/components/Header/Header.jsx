import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.conteiner}>
          <div className={style.header__content}>
            <div className={style.header__menu}>
              <div className={style.menu__icon}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <nav className={style.menu__body}>
                <ul className={style.menu__list}>
                  <li><a href="index.html" className={style.menu__link}>Page</a></li>
                  <li><a href="works.html" className={style.menu__link}>Works</a></li>
                  <li><a href="blog.html" className={style.menu__link}>Blog</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header >
    </div >
  );
}

export default Header;