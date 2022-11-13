import React, { useState, useEffect } from "react";
import ContactInfo from "./ContactInfo.js";
import eliPic from "../images/eliPic.png";
import "../styles/ContactInfo.css";
import aden from "../images/aden-pic.jpg";
import d2 from "../images/d2-pic.jpg";
import jack from "../images/jack-pic.jpg";
import eli from "../images/eli-pic.jpg";
import mik from "../images/mik-pic.jpg";

import EarnPopUp from "./EarnPopUp.js";
import abi from "../abi";

function Body() {
  const [active, setActive] = useState("");

  const makeActive = () => {
    setActive("active");
  };

  return (
    <div>
      {/* <h1>{message}</h1>
      <h4>Address: {details.address}</h4>
      <h4>Balance: {balance}</h4>
      <h4>Total Supply: {totalSupply}</h4> */}

      {/* <button
        data-modal-target="#earn-pop-up"
        onClick={makeActive}
        className="nav-button"
      >
        Earn
      </button>

      <EarnPopUp rewardUser={rewardUser} value={active} /> */}
      <div id="about-section">
        <h2 className="header2">About</h2>
        <div className="about-text">
          <section>
            $ECO is a rewards token built on the sustainable blockchain Tron. We
            firmly believe that individuals with a green footprint should be
            rewarded for their actions. We also believe that people would choose
            to be greener, if they were rewarded, hence the need for $ECO is
            earned from completing certain environmentally friendly actions;
            including, sustainable commuting and travel, beach and park
            cleanups, recycling, and being active in environmental clubs and
            groups. We firmly believe that individuals with a green footprint
            should be rewarded for their actions. We also believe that more
            people would choose to be green, if they were rewarded, hence the
            need for $ECO.
          </section>
        </div>
      </div>
      <div id="contact-section">
        <h2 className="header2">Contact Us</h2>
        <div id="contact-info-container">
          <div className="aden-info">
            <ContactInfo
              name="Aden Lu"
              email="lu.ad@northeastern.edu"
              image={aden}
            />
          </div>

          <div className="jack-info">
            <ContactInfo
              name="Jack Miller"
              email="miller.jack@northeastern.edu"
              image={jack}
            />
          </div>
          <div className="eli-info">
            <ContactInfo
              name="Elijah Muraoka"
              email="elijahmuraoka.services@gmail.com"
              image={eli}
            />
          </div>
          <div className="mikko-info">
            <ContactInfo
              name="Mikko Tripakis"
              email="tripakis.m@northeastern.edu"
              image={mik}
            />
          </div>
          <div className="d-info">
            <ContactInfo
              name="Dheeraj Valluru"
              email="dheeraj.valluru@gmail.com"
              image={d2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
