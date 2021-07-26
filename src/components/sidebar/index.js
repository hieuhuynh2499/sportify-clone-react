import React from "react";
import classes from 'classnames'
import {Link} from 'react-router-dom'
import logo from "../../images/logoSpotify.svg";
import homeLogo from "../../images/home.svg";
import searchLogo from "../../images/search.svg";
import libraryLogo from "../../images/library.svg";
import heartLogo from "../../images/heart.svg";
import plusLogo from "../../images/plus.svg";
import "./style.scss";

const listLi = [
    {
        id:1,
        img:homeLogo,
        text:'home',
        link:'/',
    },
    {   
        id:2,
        img:searchLogo,
        text:'search',
        link:'/search',
    },
    {   
        id:3,
        img:libraryLogo,
        text:'your library',
        link:'/yourplaylist',
    },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img className="sidebar__logo-img" src={logo} alt="img-logo" />
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__menu-ul">
            {
              listLi.map((item)=>(
                    <li 
                    className={classes("sidebar__menu-li",
                    {'active-menu-li':window.location.pathname === item.link})}
                    key={item.id}>
                        <img className="sidebar__menu-img" src={item.img} alt="" />
                        <Link to={item.link} className="sidebar__menu-text">{item.text}</Link>
                    </li>
                ))
            }
        </ul>
        <ul className="sidebar__menu-ul">
          <li className="sidebar__menu-li">
            <div className="sidebar__menu-img-div">
              <img className="sidebar__menu-img" src={plusLogo} alt="" />
            </div>
            <p className="sidebar__menu-text">create playlist</p>
          </li>
          <li className="sidebar__menu-li">
            <div className="sidebar__menu-img-div">
              <img className="sidebar__menu-img" src={heartLogo} alt="" />
            </div>

            <Link to="/list-favorite" className="sidebar__menu-text">listed songs</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
