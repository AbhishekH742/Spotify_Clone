import React from "react";
import NavBar from "./NavBar";
import PlayListCard from "./PlayListCard";
import Contacts from "./Contacts";
import img1 from "../images/Peaceful piano.png";
import img2 from "../images/Beats to think.png";
import img3 from "../images/Focus flow.png";
import img4 from "../images/Rap Caviar.png";
import img5 from "../images/Deep Focus.png";





export default function PlayList() {
  return (
    <div className="right  m-2 rounded">
      <NavBar />
      <div className="right-bottom">
        <div className="playList">
          <div className="playList-container flex ">
            <div className="plyList-head">
              <a href="/" className="tittle">
                <h2>Spotify Playlists</h2>
              </a>
            </div>
            <div className="show-more">
              <a href="/">Show all</a>
            </div>
          </div>
          <div className="playListCard flex ">
            <PlayListCard
              imgURL={img1}
              imgTittle={"Peaceful Piano"}
              imgDesc={"Peaceful piano to help you slow down, breathe, and..."}
            />

            <PlayListCard
              imgURL={img2}
              imgTittle={"Beats to think to"}
              imgDesc={"Focus with deep techno and tech house."}
            />

            <PlayListCard
              imgURL={img3}
              imgTittle={"Focus Flow"}
              imgDesc={"Uptempo instrumental hip hop beats."}
            />

            <PlayListCard
              imgURL={img4}
              imgTittle={"RapCaviar"}
              imgDesc={"New music from Lil Baby, Gucci Mane and DaBaby"}
            />

            <PlayListCard
              imgURL={img5}
              imgTittle={"Deep Focus"}
              imgDesc={"Keep calm and focus with ambient and post-rock music"}
            />
          </div>
        </div>

        <div className="playListBottom">
          <Contacts />
        </div>
      </div>
    </div>
  );
}
