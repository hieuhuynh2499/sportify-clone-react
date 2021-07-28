import React, { useState } from 'react'
import "./style.scss"
import {BsHeart,BsHeartFill,BsFillPlayFill,BsPause} from "react-icons/bs"
import {TiDeleteOutline} from "react-icons/ti"
import PropTypes from 'prop-types';

SongPlaylist.propTypes = {
    song: PropTypes.any,
    handleDeleteSong:PropTypes.func,
    handleEditSong:PropTypes.func,
    choseSongPlay:PropTypes.func
};

function SongPlaylist({song,handleDeleteSong,handleEditSong,choseSongPlay}) {
    const [play,setPlay] = useState(false);
    const handleChangePlay = () =>{
        if(!play){
            choseSongPlay(song)
        }
        setPlay(!play)
    }
    return (
        <div className="song">
            <div className="song__number">
                <span className="song__number__number">{song.id}</span>
                {play ? <BsPause className="song__number__icon" onClick={handleChangePlay}/>:
                <BsFillPlayFill className="song__number__icon" onClick={handleChangePlay}/>}
            </div>
            <div className="song__title">
                <img src={song.imagesong} alt="" />
                <p>
                    {song.namesong}
                    <br />
                    <span>{song.nameauthor}</span>
                </p>
            </div>
            <div className="song__album">{song.namealbum}</div>
            <div className="song__date">
                 3 giờ trước
                {song.favorite ? 
                <BsHeartFill  className="song__date__favorite" onClick={()=>handleEditSong(song)}/>: 
                <BsHeart className="song__date__dontLike" onClick={()=>handleEditSong(song)}/>}
    
            </div>
            <div className="song__oclock">
                {song.timesong}
                <TiDeleteOutline onClick={()=>handleDeleteSong(song)}/>
            </div>
        </div>
    )
}

export default SongPlaylist
