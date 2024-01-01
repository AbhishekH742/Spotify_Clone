import React from "react";

export default function Contacts() {
  return (
    <>
      <div className="contacts flex   ">
        <div className="contacts-right flex">
          <ul>
            <h3>Company</h3>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
          <ul>
            <h3>Communities</h3>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
          <ul>
            <h3>Useful links</h3>
            <li>Support</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div className="social-media flex">
          <a href="/">
            <i href="#" class="fa fa-instagram"></i>
          </a>
          <a href="/">
            <i href="#" class="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i href="#" class="fa fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="separation flex"></div>
      <div className="coptright">
      &#169; Soptify AB
      </div>
    </>
  );
}
