/** @format */

import React, { useState } from "react";
import "./index.css";
import NumPad from "./NumPad";
import Operations from "./Operations";

function Calculator() {
  const [text, setText] = useState("");
  return (
    <div id="container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div id="ContainerButton">
        <NumPad onChange={setText} />
        <Operations onChange={setText} />
      </div>
    </div>
  );
}

export default Calculator;
