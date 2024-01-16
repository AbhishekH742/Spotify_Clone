import React, { useState } from "react";
import play from "../images/play.png";

export default function PlayListCard(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  let audioElement;
  const playSong = () => {
     
    if (!audioElement) {
      audioElement = new Audio(props.audioSrc);
    }

    if (isPlaying) {
      audioElement.pause();
      
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="card cursor">
        <button
          className="play-btn cursor"
          onClick={playSong}
        
        >
          <img src={play} alt="play" id="play" />
        </button>
        <div className="img-container">
          <img src={props.imgURL} alt="Peaceful piano" />
        </div>
        <div className="img-tittle">{props.imgTittle}</div>
        <p className="img-desc">{props.imgDesc}</p>
      </div>
    </>
  );
}
