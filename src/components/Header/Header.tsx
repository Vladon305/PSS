import React, { useEffect } from 'react'
import userPhoto from '../../assets/images/user.webp'
import { NavLink } from 'react-router-dom'

export type PropsType = {
  isAuth: boolean
  login: string | null
  userId: number | null
  ava: string | undefined
  logout: () => void
}

const Header: React.FC<PropsType> = ({ userId, isAuth, login, ava, logout }) => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                <li>{isAuth && ava
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

  )
}

export default Header