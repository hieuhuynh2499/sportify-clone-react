import React from 'react'
import './style.scss'



function MusicDay({music}) {
    return (
        <div className="music-day">
            <img className="music-day__img" src={music.image} alt="" />
            <div className="music-day__content">
               <p className="music-day__text"> {music.name}</p>
            </div>
        </div>
    )
}

export default MusicDay
