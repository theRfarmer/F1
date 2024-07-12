import './VideoPlayer.css'
import video from '../../assets/F1-edit.mp4'
import { useRef } from 'react'


const VideoPlayer = ({playState,setPlayState}) => {

const player =useRef(null)

const closePlayer =(e)=>{
    if(e.target === player.current)
    {
        setPlayState(false);
    }
    }

  return (
    <div onClick={closePlayer} className={`video-player ${playState?'':'hide'}`} ref={player}>
      <video src={video} autoPlay muted controls> </video>
    </div>
  )
}

export default VideoPlayer
