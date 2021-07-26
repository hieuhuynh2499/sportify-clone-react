import React from 'react'
import './style.scss' 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Album.propTypes = {
    album:PropTypes.object
}

function Album({album}) {
    return (
        <Link to="/play-list">
            <div className="abum">
                <div className="abum__top">
                    <img className="abum__top-img" src={album.img} alt=""/>
                </div>
                <div className="abum__content">
                    <h3 className="abum__content-h3">{album.nameAlbum}</h3>
                    <p className="abum__content-p">{album.name}</p>
                </div>

            </div>
        </Link>
    )
}

export default Album
