/** @format */

import React from "react";

function Operations({ onChange }) {
  return (
    <div id="Operations">
      <button
        onClick={(e) => {
          onChange((prev) => prev + "+");
        }}
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={(e) => {
          onChange((prev) => prev + "*");
        }}
      >
        {" "}
        *{" "}
      </button>
      <button
        onClick={(e) => {
          onChange((prev) => prev + "/");
        }}
      >
        {" "}
        /{" "}
      </button>
      <button
        onClick={(e) => {
          onChange((prev) => prev + "-");
        }}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default Operations;
