import React from "react";
import rightarrow from "../images/arrow-right.png";

export default function NavBar() {
  return (
    <nav className="nav flex">
      <div className="arrows flex ">
        <img
          src={rightarrow}
          alt="arrow"
          className="invert left-arrow cursor"
        />
        <img
          src={rightarrow}
          alt="arrow"
          className="invert right-arrow cursor"
        />
      </div>
      <div className="user-btn">
        <button className="signUp">Sign Up</button>
        <button className="login">Log in</button>
      </div>
    </nav>
  );
}
