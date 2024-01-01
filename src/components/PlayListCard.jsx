import React from "react";
import play from "../images/play.png"


export default function PlayListCard(props) {
  return (
    <>
      <div className="card cursor">
        <div className="play-btn cursor">
          <img src={play}  alt="play" id="play"/>
        </div>
        <div className="img-container">
          <img src={props.imgURL} alt="Peaceful piano" />
        </div>
        <div className="img-tittle">{props.imgTittle}</div>
        <p className="img-desc">{props.imgDesc}</p>
      </div>
    </>
  );
}
