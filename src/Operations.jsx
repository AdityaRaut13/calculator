/** @format */

import React, { useContext } from "react";
import { textContext } from "./Calculator";

function Operations() {
  const setText = useContext(textContext);
  return (
    <div id="Operations">
      <button
        onClick={(e) => {
          setText((prev) => prev + "+");
        }}
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={(e) => {
          setText((prev) => prev + "*");
        }}
      >
        {" "}
        *{" "}
      </button>
      <button
        onClick={(e) => {
          setText((prev) => prev + "/");
        }}
      >
        {" "}
        /{" "}
      </button>
      <button
        onClick={(e) => {
          setText((prev) => prev + "-");
        }}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default Operations;
