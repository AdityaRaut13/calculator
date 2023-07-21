/** @format */

import React from "react";
import "./index.css";
import NumPadItems from "./NumPadItems";

function NumPad({ onChange }) {
  return (
    <div id="NumPad">
      <NumPadItems numbers={["7", "8", "9"]} onChange={onChange} />
      <NumPadItems numbers={["4", "5", "6"]} onChange={onChange} />
      <NumPadItems numbers={["3", "2", "1"]} onChange={onChange} />
      <NumPadItems numbers={["0", ".", "="]} onChange={onChange} />
    </div>
  );
}

export default NumPad;
