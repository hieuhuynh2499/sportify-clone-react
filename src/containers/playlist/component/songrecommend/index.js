import React from 'react'
import "./style.scss"
import PropTypes from 'prop-types';

SongRecommend.propTypes = {
    song: PropTypes.object,
    handleAddSong:PropTypes.func,
};

function SongRecommend({song,handleAddSong}) {
    return (
        <div className="song-recommend">
            <div  className="song-recommend__left">  
                <img src={song.imagesong} alt="" />
                <p>
                    {song.namesong}
                    <br />
                    <span>{song.nameauthor}</span>
                </p>
            </div>
            <div  className="song-recommend__center">
               {song.namealbum}
            </div>
            <div  className="song-recommend__right">
                <button onClick={()=>handleAddSong(song)}>add</button>
            </div>
        </div>
    )
}

export default SongRecommend
