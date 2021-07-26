import React  from 'react'
import Album from '../../components/abum'
import MusicDay from './components/MusicDay'
import { arrDaySong, arrRecently1, arrRecently2, arrRecently3 } from './contants'
import './style.scss' 
const Home = () => {

  return (
    <div className="home">
      <div className="home__days">
        <h2 className="home__days-title">have good days</h2>
        <div className="home__days-content">
          {
            arrDaySong.map((music,index) =><MusicDay key={index} music={music}/>) 
          } 
        </div>
      </div>
      <div className="collection">
          <h2 className="collection__title">Recently played</h2>
          <div className="collection__content">
            {
              arrRecently1.map((album,index) => <Album  key={index} album={album} />)
            }
          </div>
      </div>
      <div className="collection">
          <h2 className="collection__title">Recently played</h2>
          <div className="collection__content">
            {
              arrRecently2.map((album,index) => <Album  key={index} album={album} />)
            }
          </div>
      </div>
      <div className="collection">
          <h2 className="collection__title">Recently played</h2>
          <div className="collection__content">
           
            {
              arrRecently3.map((album,index) => <Album  key={index} album={album} />)
            }
          </div>
      </div>
      <div className="collection">
          <h2 className="collection__title">Recently played</h2>
          <div className="collection__content">
            {
              arrRecently1.map((album,index) => <Album  key={index} album={album} />)
            }
          </div>
      </div>
    </div>
  )
}

export default Home
