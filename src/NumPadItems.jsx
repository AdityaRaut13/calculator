/** @format */

import React, { useContext } from "react";
import { textContext } from "./Calculator";

function NumPadItems({ numbers }) {
  const setText = useContext(textContext);
  return (
    <div className="NumPadItem">
      {numbers.map((value) => (
        <button
          onClick={(e) => {
            value === "="
              ? setText((prev) => eval(prev))
              : setText((prev) => prev + value);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default NumPadItems;
