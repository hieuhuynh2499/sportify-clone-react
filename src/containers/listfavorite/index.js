import React, { useEffect } from 'react'
import SongPlaylist from '../playlist/component/song'
import "../playlist/style.scss"
import {BiPause} from "react-icons/bi"
import favoriteImg from "../../images/favorite.JPG"
import { useDispatch, useSelector } from 'react-redux'
import { listSongRequest } from '../../actions/listsong'
function ListFavourite() {
    const listSongReducer = useSelector(state => state.songReducer.listSong)
    
    const dispatch = useDispatch();
  const listSongFavorite = listSongReducer.filter(song => song.favorite)
    useEffect(()=>{
        dispatch(listSongRequest())
    },[dispatch])
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="playlist">
        <div className="playlist__top" style={{backgroundColor:"rgb(80, 56, 160)"}}>
            <div className="playlist__top-bg"></div>
            <div className="playlist__top-left">
                <img className="playlist__top-img" src={favoriteImg} alt="" />
            </div>
            <div className="playlist__top-right">
                <h3 className="playlist__top-right__h3">playlist</h3>
                <h2 className="playlist__top-right__h2">Liked Songs</h2>
                <p className="playlist__top-right__p">Hiếu hữu huỳnh - <span className="playlist__top-right__span">2 song</span></p>
            </div>
        </div>
        <div className="playlist__bottom">
            <div className="playlist__bottom-top">
                <div className="playlist__bottom-play">
                    <BiPause className="playlist__bottom-play__icon"/>
                </div>
            </div>
            <div className="playlist__bottom-list">
                <div className="playlist__bottom-list__top">
                    <div className="playlist__bottom-list__top__number">#</div>
                    <div className="playlist__bottom-list__top__title">title</div>
                    <div className="playlist__bottom-list__top__album">album</div>
                    <div className="playlist__bottom-list__top__date">date added</div>
                    <div className="playlist__bottom-list__top__oclock">clock</div>
                </div>
                {
                 listSongFavorite.length > 0 ?listSongFavorite.map((song) =>  <SongPlaylist key={song.id} song={song}/>):<h1 color="#fff"> chưa có bài hát yêu thích</h1>
                }
              
            </div>
        </div>
    </div>
    )
}

export default ListFavourite
