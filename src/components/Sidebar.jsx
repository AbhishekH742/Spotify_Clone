import React from "react";
import Home from "../images/home.png";
import Logo from "../images/logo.png";
import Search from "../images/search.png";
import library from "../images/library.png";
import plus from "../images/plus.png";
// import globe from "../images/Vector.png";
import Footer from "./Footer";

export default function Sidebar() {
  return (
    <div className="left flex">
      <div className="sideNavbar rounded">
        <img src={Logo} alt="logo" className="logo cursor" />
        <div className="home flex g-15 item-align cursor">
          <img src={Home} alt="home" className="invert img-resize " />
          <h4>Home</h4>
        </div>

        <div className="search flex g-15 item-align cursor">
          <img src={Search} alt="search" className="invert img-resize " />
          <h4>Search</h4>
        </div>
      </div>

      <div className="library  rounded">
        <div className="lib-header flex item-align">
          <div className="lib-tittle flex item-align cursor">
            <img src={library} alt="lib" className="invert lib-img" />
            <h4>Your Library</h4>
          </div>

          <img src={plus} alt="plus" className="invert plus lib-img cursor" />
        </div>


        <Footer />

        <div className="language-btn">
          <button className="btn cursor">
            <h3>English</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
