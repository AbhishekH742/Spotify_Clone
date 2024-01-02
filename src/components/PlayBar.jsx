import React from 'react'
import playBtn from "../images/play-button.png"
import prevBtn from "../images/previous.png";
import nextBtn from "../images/next.png"

export default function PlayBar() {
  return (
    <div className='playBar-container'>
      <div className='play-btn-img'>
        <img src={prevBtn} alt="previous" id="prev" className='img-resize invert cursor'/>
        <img src={playBtn} alt="playBtn" id='playBtn' className='img-resize invert cursor'/>
        <img src={nextBtn} alt="next" id='next' className='img-resize invert cursor'/>
      </div>
    </div>
  )
}
