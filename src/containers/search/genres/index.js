import React from 'react'

function Genres(props) {
    const {genresHeight,genresTitle,genresMain,bg,img} = props
    return (
        <div className={genresHeight} style={{backgroundColor:`${bg}`}}>
            <h3  className={genresTitle}>Pop</h3>
            <div  className={genresMain}>
                <img className="genres__main-img" src={img} alt="" />
            </div>
        </div>
    )
}

export default Genres
