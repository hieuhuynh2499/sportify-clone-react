import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import classes from 'classnames'
import { listLink } from './contants'
import logo from '../../images/logoSpotify.svg'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const navbarMobile = classes(
    'navbar__mobile',
    { 'show-menu': showMenu },
    { 'off-menu': !showMenu },
  )
  const handleshowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <img className="header__logo-image" src={logo} alt="" />
          </div>
          <nav className="navbar">
            <ul className="navbar__ul">
              {listLink.map((item) => (
                <li className="navbar__li" key={item.id}>
                  <Link className="navbar__link" to={item.link}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="header__bars"
            onClick={handleshowMenu}
            onMouseDown={() => {}}
            tabIndex="0"
            type="button"
          >
            <FaBars className="header__bars-icon" />
          </button>
        </div>
      </div>
      <div className={navbarMobile}>
        <nav>
          <ul className="navbar__mobile-ul">
            {showMenu &&
              listLink.map((item) => (
                <li className="navbar__mobile-li" key={item.id}>
                  <Link to={`/${item.link}`} className="navbar__mobile-link">
                    {item.text}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="navbar__mobile-logo">
          <img className="header__logo-image" src={logo} alt="" />
        </div>
      </div>
    </header>
  )
}
export default Header