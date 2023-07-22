/** @format */

import React, { useState } from "react";
import "./index.css";
import NumPad from "./NumPad";
import Operations from "./Operations";

export const textContext = React.createContext();

function Calculator() {
  const [text, setText] = useState("");
  return (
    <div id="container">
      <textContext.Provider value={setText}>
        <input
          type="text"
          value={text}
          onChange={e=>setText(text)}
        />
        <div id="ContainerButton">
          <NumPad />
          <Operations />
        </div>
      </textContext.Provider>
    </div>
  );
}

export default Calculator;
