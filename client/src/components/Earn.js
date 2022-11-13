import React, { useState } from "react";
import EarnPopUp from "./EarnPopUp";

const Earn = (props) => {
  const [active, setActive] = useState("");

  const makeActive = () => {
    setActive("active");
  };

  const overlayClass = "overlay " + active;

  return (
    <div>
      <button
        data-modal-target="#earn-pop-up"
        onClick={makeActive}
        className="nav-button"
      >
        Earn
      </button>

      <EarnPopUp rewardUser={props.rewardUser} value={active} />

      <div className={overlayClass}></div>
    </div>
  );
};

export default Earn;
