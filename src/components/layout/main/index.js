import React, { useState } from 'react'
import Sidebar from '../../sidebar'
import { useLocation } from 'react-router-dom'
import './style.scss'
import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md';
import {AiFillCaretDown,AiFillCaretUp,AiOutlineSearch} from 'react-icons/ai';
import imgSanji from '../../../images/avata.jpg'
import PlayMusic from '../../playmusic';
import laylalalay from '../../../mp3/Laylalay-JackG5R.mp3'
import keobonggon from '../../../mp3/KeoBongGon.mp3'
import tinhyeumauhong from '../../../mp3/TinhYeuMauHong.mp3'

const listSong = [{
  namesong: "laylalalay",
  nameauthor: "jack 97",
  imagesong: "https://i.scdn.co/image/ab67616d0000485129f906fe7a60df7777b02ee1",
  namealbum: "muộn rồi mà sao còn",
  timesong: "4:35",
  favorite: false,
  path:laylalalay,
  id: "1"
},
{
  namesong: "kẹo bông gòn",
  nameauthor: "osad ",
  imagesong: "https://i.scdn.co/image/ab67616d00004851df69f9f25936875207a6a8dd",
  namealbum: "yêu sắc yếu",
  timesong: "2:57",
  favorite: false,
  path:keobonggon,
  id: "2"
},
{
  namesong: "tình yêu màu hồng",
  nameauthor: "wren evans",
  imagesong: "https://i.scdn.co/image/ab67616d0000485108c808810a37c9a04f88cca1",
  namealbum: "thích em nhiều hơn",
  timesong: "2:51",
  favorite: false,
  path:tinhyeumauhong,
  id: "3"
},
{
  namesong: "nang tho",
  nameauthor: "hoang dung",
  imagesong: "https://i.scdn.co/image/ab67616d0000485129f906fe7a60df7777b02ee1",
  namealbum: "muộn rồi mà sao còn",
  timesong: "4:35",
  favorite: false,
  path:laylalalay,
  id: "1"
},
{
  namesong: "tinh ban dieu ky",
  nameauthor: "amee ricky star ",
  imagesong: "https://i.scdn.co/image/ab67616d00004851df69f9f25936875207a6a8dd",
  namealbum: "yêu sắc yếu",
  timesong: "2:57",
  favorite: false,
  path:keobonggon,
  id: "2"
},
{
  namesong: "yeu lai tu dau",
  nameauthor: "khac viet",
  imagesong: "https://i.scdn.co/image/ab67616d0000485108c808810a37c9a04f88cca1",
  namealbum: "thích em nhiều hơn",
  timesong: "2:51",
  favorite: false,
  path:tinhyeumauhong,
  id: "3"
}
]
function MainLayout({ children }) {
  const location = useLocation();
  const [indexSongCurrent,setIndexSongCurrent] = useState(0)
  const [songList, setSongList] = useState(listSong);
  const [random, setRandom] = useState(false);
  let currentSong = songList[indexSongCurrent] || null;
  const randomSong = () =>{
      let indexRandomSong = 0
      do{
          indexRandomSong = Math.floor(Math.random()*listSong.length);
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
      if(indexSongCurrent > songList.length -2) {
        setIndexSongCurrent(0)
      }
    }
  }

  const prevSong = () =>{
    setIndexSongCurrent(x => x - 1)
  if(indexSongCurrent === 0) setIndexSongCurrent(songList.length - 1)
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