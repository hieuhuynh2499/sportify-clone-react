import React from 'react'
import './style.scss' 
import abum1 from '../../images/mendes.jpg';
function Abum() {
    return (
        <div className="abum">
            <div className="abum__top">
                <img className="abum__top-img" src={abum1} alt=""/>
            </div>
            <div className="abum__content">
                <h3 className="abum__content-h3">shawn mendes</h3>
                <p className="abum__content-p">treat you better</p>
            </div>

        </div>
    )
}

export default Abum
