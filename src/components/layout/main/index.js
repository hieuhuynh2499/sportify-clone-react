import React, { useState } from 'react'
import Sidebar from '../../sidebar'
import { useLocation } from 'react-router-dom'
import './style.scss'
import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md';
import {AiFillCaretDown,AiFillCaretUp,AiOutlineSearch} from 'react-icons/ai';
import imgSanji from '../../../images/avata.jpg'
import PlayMusic from '../../playmusic';
import { useDispatch, useSelector } from 'react-redux';
import { listSongRequest } from '../../../actions/listsong';
import { useEffect } from 'react';

function MainLayout({ children }) {
  const listSongReducer = useSelector(state => state.songReducer.listSong)
  const songChose = useSelector(state => state.songReducer.songChose)
  const dispatch = useDispatch();
 
  useEffect(()=>{
      dispatch(listSongRequest())
  },[dispatch])
  useEffect(()=>{
    let indexSong = listSongReducer.findIndex(song => song.id === songChose.id)
    if(indexSong === -1) indexSong = 0
    setIndexSongCurrent(indexSong)
  },[songChose,listSongReducer])
  const location = useLocation();
  const [indexSongCurrent,setIndexSongCurrent] = useState(0)
  const [random, setRandom] = useState(false);
  let currentSong = listSongReducer[indexSongCurrent] || {};
  // console.log(listSongReducer)
  const randomSong = () =>{
      let indexRandomSong = 0
      do{
          indexRandomSong = Math.floor(Math.random()*listSongReducer.length);
      }while (indexRandomSong === indexSongCurrent)
      return indexRandomSong
  }
  const handleChangeRandom = () =>{
    setRandom(!random)
  }
  const nextSong = () =>{
    if(random){
     setIndexSongCurrent(randomSong())
    }
    else{
      setIndexSongCurrent(x => x + 1)
      if(indexSongCurrent > listSongReducer.length -2) {
        setIndexSongCurrent(0)
      }
    }
  }

  const prevSong = () =>{
    setIndexSongCurrent(x => x - 1)
    if(indexSongCurrent === 0) setIndexSongCurrent(listSongReducer.length - 1)
  }
  const getBgHeader = (path) =>{
    let bg = "";
    switch (path){
      case "/play-list":
        bg = 'rgb(64, 152, 160)' 
        return bg;
      case "/list-favorite":
        bg = 'rgb(80, 56, 160)' 
        return bg;
      default:
        return bg;
    }
  }
  return (
    <div className="mainlayout">
          <div className="mainlayout__left">
              <Sidebar />
          </div>
          <div className="mainlayout__right">
              <header className="mainlayout__header" style={{backgroundColor:getBgHeader(location.pathname)}}>
                <div className="mainlayout__header-left">
                  <div className="mainlayout__header-circle">
                      <MdNavigateBefore color="white"/>
                  </div>
                  <div className="mainlayout__header-circle">
                      <MdNavigateNext color="white"  />
                  </div>
                  {
                    location.pathname === "/search" && <div className="mainlayout__header-search">
                    <input className="mainlayout__header-search__input" type="text" placeholder="Artists,songs,or postcard ..." />
                    <button className="mainlayout__header-search__btn"><AiOutlineSearch/></button>
                  </div>
                  }
                  <div>
                    
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
      <PlayMusic songCurrent={currentSong} nextSong={nextSong} prevSong={prevSong} handleChangeRandom={handleChangeRandom} />
    </div>
  )
}

export default MainLayout