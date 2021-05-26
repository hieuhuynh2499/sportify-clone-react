import React  from 'react'
import Abum from '../../components/abum'
import MusicDay from './components/MusicDay'
import './style.scss' 
const Home = () => {

  return (
    <div className="home">
      <div className="home__days">
        <h2 className="home__days-title">have good days</h2>
        <div className="home__days-content">
          <MusicDay/>
          <MusicDay/>
          <MusicDay/>
          <MusicDay/>
          <MusicDay/>
          <MusicDay/>
          <MusicDay/>
        </div>
      </div>
      <div className="collection">
          <h2 className="collection__title">Recently played</h2>
          <div className="collection__content">
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
          </div>
      </div>
      <div className="collection">
          <h2 className="collection__title">Recently played</h2>
          <div className="collection__content">
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
          </div>
      </div>
      <div className="collection">
          <h2 className="collection__title">Recently played</h2>
          <div className="collection__content">
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
          </div>
      </div>
      <div className="collection">
          <h2 className="collection__title">Recently played</h2>
          <div className="collection__content">
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
            <Abum/>
          </div>
      </div>
    </div>
  )
}

export default Home
