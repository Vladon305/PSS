import React from 'react';
import userPhoto from '../../assets/images/user.webp';
import { NavLink } from 'react-router-dom';

const Header = ({ userId, isAuth, login, ava, logout }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                <li>{isAuth & ava
                  ? <NavLink to={`/Profile/${userId}`} className="menu__link">
                    <div className='menu__ava'><img src={ava} alt="ava" /></div>
                  </NavLink>
                  : <NavLink to={`/Profile/${userId}`} className="menu__link">
                    <div className='menu__ava'><img src={userPhoto} alt="ava" /></div>
                  </NavLink>}
                </li>
                <li>{isAuth
                  ? <p className='menu__link'>{login}</p> && <button onClick={logout}>Log out</button>
                  : <NavLink to="/Login" className="menu__link">Login</NavLink>}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;