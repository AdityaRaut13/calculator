/** @format */

import React from "react";
import "./index.css";
import NumPadItems from "./NumPadItems";

function NumPad() {
  return (
    <div id="NumPad">
      <NumPadItems numbers={["7", "8", "9"]} />
      <NumPadItems numbers={["4", "5", "6"]} />
      <NumPadItems numbers={["3", "2", "1"]} />
      <NumPadItems numbers={["0", ".", "="]} />
    </div>
  );
}

export default NumPad;
