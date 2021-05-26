import React from 'react'
import './style.scss'
import songca from '../../../images/songca.jpg';
function MusicDay() {
    return (
        <div className="music-day">
            <img className="music-day__img" src={songca} alt="" />
            <div className="music-day__content">
               <p className="music-day__text"> discover weekly</p>
            </div>
        </div>
    )
}

export default MusicDay
