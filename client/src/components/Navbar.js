import "../styles/Navbar.css";
import leafLogo from "../images/leafLogo.svg";
import profileIcon from "../images/profileIcon.svg";
import React from "react";
import Earn from "./Earn";
import Balance from "./Balance";

function Navbar(props) {
  return (
    <div id="navbar">
      <ul id="nav-left">
        <li className="nav-button">
          <a href="#about-section">About</a>
        </li>
        <li className="nav-button">
          <a href="#contact-section">Contact</a>
        </li>
        <li>
          <Earn rewardUser={props.rewardUser} />
        </li>
        <li>
          <button className="nav-button">Shop</button>
        </li>
        <li>
          <img id="leaf-logo" src={leafLogo} alt="Leaf Icon" />
        </li>
      </ul>
      <ul id="nav-right">
        <li>
          <Balance balance={props.balance} />
        </li>
        <img
          id="profile-icon"
          className="nav-button"
          src={profileIcon}
          alt="Profile Icon"
        />
      </ul>
    </div>
  );
}

export default Navbar;
