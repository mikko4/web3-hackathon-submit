import React, { useState } from "react";
import EarnPopUp from "./EarnPopUp";


const Balance = (props) => {
  return (
    <div>
      <h3 id="balance">Bal: ${props.balance} ECO</h3>
    </div>
  );
};

export default Balance;
