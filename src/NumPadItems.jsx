/** @format */

import React from "react";

function NumPadItems({ numbers, onChange }) {
  return (
    <div className="NumPadItem">
      {numbers.map((value) => (
        <button
          onClick={(e) => {
            value === "="
              ? onChange((prev) => eval(prev))
              : onChange((prev) => prev + value);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default NumPadItems;
