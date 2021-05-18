import React from 'react'
import logo from '../../images/logoSpotify.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import './style.scss'
import {
  listLinkCompany,
  listLinkCommunities,
  listLinkUseful,
} from './contants'
import LinkFooter from './components'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer__center">
            <LinkFooter title="COMPANY" listLink={listLinkCompany} />
            <LinkFooter title="COMMUNITIES" listLink={listLinkCommunities} />
            <LinkFooter title="USEFUL LINKS" listLink={listLinkUseful} />
          </div>
          <div className="footer__social-Network">
            <div className="footer__icon-container">
              <FaInstagram className="footer__icon" />
            </div>
            <div className="footer__icon-container">
              <FaFacebookF className="footer__icon" />
            </div>
            <div className="footer__icon-container">
              <FaTwitter className="footer__icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
