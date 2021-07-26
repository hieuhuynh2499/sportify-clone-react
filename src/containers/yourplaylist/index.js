import React from 'react'
import { Link } from 'react-router-dom'
import {FiMusic} from "react-icons/fi"
import "./style.scss"
function YourPlayList() {
    return (
        <div className="your-playlist">
           <div className="your-playlist__content">
                <FiMusic className="your-playlist__icon"/>
                <h2 className="your-playlist__h2">Create your first playlist</h2>
                <p className="your-playlist__p">It's easy, we'll help you.</p>
                <Link className="your-playlist__a">create playlist</Link>
           </div>
        </div>
    )
}

export default YourPlayList
