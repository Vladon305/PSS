import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header__content">
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                <li><NavLink to="/" className="menu__link">Page</NavLink></li>
                <li><NavLink to="/Works" className="menu__link">Works</NavLink></li>
                <li><NavLink to="/Blog" className="menu__link">Blog</NavLink></li>
                <li><NavLink to="/Dialogs" className="menu__link">Dialogs</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;