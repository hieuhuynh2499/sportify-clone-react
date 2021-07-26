import React, { useEffect } from 'react'
import './style.scss'
import {BiPause} from "react-icons/bi"
import SongPlaylist from './component/song'
import SongRecommend from './component/songrecommend'
import { useDispatch, useSelector } from 'react-redux'
import { AddSongRequest, DeleteSongRequest, editSongRequest, listSongRequest } from '../../actions/listsong'
import { listAddSongRequest } from '../../actions/addsong'
function PlayList() {
    const listSongReducer = useSelector(state => state.songReducer)
    const listAddSongReducer = useSelector(state => state.addSongReducer)
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(listSongRequest())
        dispatch(listAddSongRequest())
    },[dispatch])
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleAddSong = (song) =>{
       
       dispatch(AddSongRequest(song))
    }
    const handleDeleteSong = (song) =>{
       
        dispatch(DeleteSongRequest(song))
    }
    const handleEditSong = (song) =>{
        console.log(song)
        const songFavorite = {...song, favorite:!song.favorite} 
        dispatch(editSongRequest(songFavorite))
    }
    return (
        <div className="playlist">
            <div className="playlist__top">
                <div className="playlist__top-bg"></div>
                <div className="playlist__top-left">
                    <img className="playlist__top-img" src="https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521" alt="" />
                </div>
                <div className="playlist__top-right">
                    <h3 className="playlist__top-right__h3">playlist</h3>
                    <h2 className="playlist__top-right__h2">My playlist #2</h2>
                    <p className="playlist__top-right__p">Hiếu hữu huỳnh - <span className="playlist__top-right__span">2 song, 7 min 9 sec</span></p>
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
                       listSongReducer.map((song,index) =>  <SongPlaylist key={index} song={song} handleDeleteSong={handleDeleteSong} handleEditSong={handleEditSong}/>)
                   }
                   
                </div>
                <div className="playlist__recommend">
                    <h3 className="playlist__recommend-h3">Recommended</h3>
                    <span className="playlist__recommend-span">Based on what's in this playlist</span>
                   <div className="playlist__recommend-main">
                        {
                            listAddSongReducer.map((song) =>  <SongRecommend key={song.id} song={song} handleAddSong={handleAddSong} />)
                        }
                   </div>
                </div>
            </div>
        </div>
    )
}

export default PlayList
