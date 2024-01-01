import React from "react";


export default function PlayListCard(props) {
  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src={props.imgURL} alt="Peaceful piano" />
        </div>
        <div className="img-tittle">{props.imgTittle}</div>
        <p className="img-desc">{props.imgDesc}</p>
      </div>
    </>
  );
}
