import EarnForm from "./EarnForm.js";
import React, { useState } from "react";

const EarnPopUp = (props) => {
  let popUpClass = "pop-up " + props.value;

  console.log(popUpClass);

  const handleClose = (e) => {
    console.log(e);
    document.getElementById("earn-pop-up").classList = "pop-up";
    popUpClass = "pop-up";
  };

  return (
    <div className={popUpClass} id="earn-pop-up">
      <button className="close-btn" onClick={handleClose}>
        &times;
      </button>
      <h2 id="claim-prompt">Claim your tokens now!</h2>
      <EarnForm rewardUser={props.rewardUser} />
    </div>
  );
};

export default EarnPopUp;
