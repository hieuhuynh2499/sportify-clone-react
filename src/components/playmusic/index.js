import React, { useState } from 'react'
import './style.scss'
import {BsHeart,BsAspectRatio} from 'react-icons/bs'
import {BiSkipNext,BiSkipPrevious,BiPlay,BiDevices,BiPause} from 'react-icons/bi'
import {FaRandom,FaVolumeDown} from 'react-icons/fa'
import {FiRepeat} from 'react-icons/fi'
import {HiMicrophone} from 'react-icons/hi'
import {RiPlayList2Fill} from 'react-icons/ri'
import InputMusic from './components/inputslider'
import { useRef } from 'react'
import PropTypes from 'prop-types'


PlayMusic.prototype ={
  songCurrent:PropTypes.object,
  nextSong:PropTypes.func,
  prevSong:PropTypes.func,
  handleChangeRandom:PropTypes.func,
}


function PlayMusic({songCurrent,nextSong,prevSong,handleChangeRandom}) { 
    const [precentage,setPrecentage] = useState(0)
    const audioRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [random, setRandom] = useState(false);
    const [repeat, setRepeat] = useState(false)
    const onChange = (e) =>{
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPrecentage(e.target.value)
    }
    const changeRandom = () =>{
      setRandom(!random)
      handleChangeRandom()
      console.log(12312)
    }
    const changeRepeat = () =>{
      setRepeat(!repeat)
    }
    const play = () => {
        const audio = audioRef.current
        audio.volume = 1
    
        if (!isPlaying) {
          setIsPlaying(true)
          audio.play()
        }
    
        if (isPlaying) {
          setIsPlaying(false)
          audio.pause()
        }
      }
      const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
    
        setPrecentage(+percent)
        setCurrentTime(time.toFixed(2))
      }
      function secondsToHms(seconds) {
        if (!seconds) return '00:00'
    
        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
    
        let min = parseInt(duration / 60)
        duration = duration % 60
    
        let sec = parseInt(duration)
    
        if (sec < 10) {
          sec = `0${sec}`
        }
        if (min < 10) {
          min = `0${min}`
        }
    
        if (parseInt(hours, 10) > 0) {
          return `${parseInt(hours, 10)}h ${min}m ${sec}s`
        } else if (min === 0) {
          return `00: ${sec}`
        } else {
          return `${min}: ${sec}`
        }
      }
    return (
        <div className="playmusic">
            <div className="playmusic__left">
                <div className="playmusic__image">
                    <img src={songCurrent.imagesong}alt="" />
                </div>
                <div className="playmusic__song">
                    <p className="playmusic__song-name">{songCurrent.namesong}</p>
                    <span className="playmusic__song-singer">{songCurrent.nameauthor}</span>
                </div>
                <div className="playmusic__heart">
                    <BsHeart className="playmusic__heart-icon"/>
                    <BsAspectRatio className="playmusic__heart-icon"/>
                </div>
            </div>
            <div className="playmusic__play">
                <div className="playmusic__play-top">
                    <button  className="playmusic__play-btn" onClick={changeRandom}><FaRandom className={`playmusic__play-icon1 ${random  && 'playmusic__play-icon1--green' }`}/></button>
                    <button  className="playmusic__play-btn" onClick={prevSong}>  <BiSkipPrevious className="playmusic__play-icon"/></button>
                    <button  className="playmusic__play-btn playmusic__play-start " onClick={play}>
                        {isPlaying ? <BiPause className="playmusic__play-icon"/> :<BiPlay className="playmusic__play-icon"/> }
                    </button>
                    <button  className="playmusic__play-btn" onClick={nextSong}><BiSkipNext className="playmusic__play-icon"/></button>
                    <button  className="playmusic__play-btn" onClick={changeRepeat}><FiRepeat className={`playmusic__play-icon1 ${repeat  && 'playmusic__play-icon1--green' }`}/></button>
                </div>
                <div className="playmusic__play-center">
                    <div className="field">
                        <div className="value">
                        {secondsToHms(currentTime)}</div>
                        {/* <input  className="playmusic__input-range" type="range"  steps="0.01" onChange={onChange} /> */}
                        <InputMusic onChange={onChange} percentage={precentage}/>
                        <audio src={songCurrent.path} ref={audioRef} 
                            onLoadedData={e =>{
                                console.log(e.currentTarget.duration)
                                setDuration(e.currentTarget.duration.toFixed(2))
                            }}
                            onTimeUpdate={getCurrDuration}
                            onEnded={()=>{
                              console.log("bai hat da het")
                              nextSong()
                            }}
                        ></audio>
                        <div className="value ">
                        {secondsToHms(duration)}</div>
                    </div>
                </div>
                </div>
                <div className="playmusic__play-right">
                        <button className="playmusic__play-btn"><HiMicrophone /></button>
                        <button className="playmusic__play-btn">  <RiPlayList2Fill/></button>
                        <button className="playmusic__play-btn"><BiDevices/></button>
                        <button className="playmusic__play-btn"><FaVolumeDown/></button>
                        {/* <input className="playmusic__input-range" type="range" min="10" max="200" value="100" steps="1"/> */}
                </div>
               
        </div>
    )
}

export default PlayMusic
