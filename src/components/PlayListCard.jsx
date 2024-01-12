import React, { useState } from "react";
import play from "../images/play.png"


export default function PlayListCard(props) {

 
    const [isPlaying, setIsPlaying] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

  
    const playSong = () => {
      const audioUrl = props.audioSrc; 
      if (!isClicked) {
        const audioElement = new Audio(audioUrl);
        audioElement.play();
        setIsClicked(true);
        setIsPlaying(true);
        console.log(isClicked, isPlaying);
      }
  
      
    };
 

  return (
    <>
      <div className="card cursor">
        <button className="play-btn cursor" onClick={playSong} disabled = {isClicked}>
          <img src={play}  alt="play" id="play"/>
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
