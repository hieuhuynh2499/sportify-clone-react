import React from 'react'
import Sidebar from '../../sidebar'
import './style.scss'
import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md';
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai';
import imgSanji from '../../../images/avata.jpg'

function MainLayout({ children }) {
  return (
    <div className="mainlayout">
        <div className="mainlayout__left">
            <Sidebar />
        </div>
        <div className="mainlayout__right">
            <header className="mainlayout__header">
              <div className="mainlayout__header-left">
                <div className="mainlayout__header-circle">
                    <MdNavigateBefore color="white"/>
                </div>
                <div className="mainlayout__header-circle">
                    <MdNavigateNext color="white"  />
                </div>
              </div>
              <div className="mainlayout__header-right">  
                <button className="mainlayout__btn">
                  upgrade
                </button>
                <button className="mainlayout__btn-avatar">
                  <img className="mainlayout__btn-avatar__img" src={imgSanji} alt="" />
                  <span className="mainlayout__btn-avatar__span">name user</span>
                  {true ?<AiFillCaretUp/>:<AiFillCaretDown/>}
                </button>
              </div>
          </header>
          {children}
        </div>
    </div>
  )
}

export default MainLayout