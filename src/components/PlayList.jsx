import React from "react";
import NavBar from "./NavBar";
import PlayListCard from "./PlayListCard";
import Contacts from "./Contacts";
import img1 from "../images/songs-image/Kgf.jpeg";
import img2 from "../images/songs-image/Bhajarangi.jpg";
import img3 from "../images/songs-image/Kantara.jpeg";
import img4 from "../images/songs-image/kgf 2.jpeg";
import img5 from "../images/songs-image/Yuvaratna.jpeg";
import kgf from "../Songs/KGF.mp3";
import Hanuman from "../Songs/Hanuman.mp3";
import Kantara from "../Songs/Bhoot Kola.mp3";
import Dheera from "../Songs/Dheera.mp3";
import Neenadena from "../Songs/Neenadena.mp3";

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
              imgTittle={"KGF Toofan"}
              imgDesc={
                "Listen to Toofan online. Toofan is a Hindi language song ..."
              }
              audioSrc={kgf}
            />

            <PlayListCard
              imgURL={img2}
              imgTittle={"Jai Bajarangi"}
              imgDesc={
                "The High Energy Song Lyrical Video Jai Bajarangi From Hatrick Hero ..."
              }
              audioSrc={Hanuman}
            />

            <PlayListCard
              imgURL={img3}
              imgTittle={"Kantara"}
              imgDesc={
                "song 'Karma' from Tamil movie 'Kantara' starring Rishab Shetty ..."
              }
              audioSrc={Kantara}
            />

            <PlayListCard
              imgURL={img4}
              imgTittle={"Dheera Dheera"}
              imgDesc={
                "Dheera Dheera Song with Lyrics from Tamil Movie KGF Chapter 1 ..."
              }
              audioSrc={Dheera}
            />

            <PlayListCard
              imgURL={img5}
              imgTittle={"Neenadena Naa"}
              imgDesc={
                "Neenaade Naa is a Kannada language song and is sung by Thaman S ..."
              }
              audioSrc={Neenadena}
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
