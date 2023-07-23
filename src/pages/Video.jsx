import React, { useRef, useState } from 'react';
import "./video.css";
import { meal } from '../constants';
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";

export default function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='video-cont'>
      <video
        type="video/mp4"
        loop
        ref={videoRef}
        src={meal}
        controls={false}
        muted
      ></video>
      <div className='video-overlay'>
      <div className="video-overlay-circle" onClick={handlePlayPauseClick}>
        {isPlaying ? (
          <BsPauseFill className="play-pause-icon" />
        ) : (
          <BsFillPlayFill className="play-pause-icon" />
        )}
      </div>
    </div>
  </div>
  );
}
