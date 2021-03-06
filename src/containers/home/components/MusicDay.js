import React from 'react'
import './style.scss'
import {FaPlay} from "react-icons/fa"
import { Link } from 'react-router-dom'


function MusicDay({music}) {
    return (
       <Link to="/play-list">
            <div className="music-day">
                <img className="music-day__img" src={music.image} alt="" />
                <div className="music-day__content">
                <p className="music-day__text"> {music.name}</p>
                <div className="music-day__icon">
                        <FaPlay/>
                </div>
                </div>
            </div>
       </Link>
    )
}

export default MusicDay
