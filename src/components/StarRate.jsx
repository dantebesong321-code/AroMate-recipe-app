import { MdStar } from "react-icons/md";
import { useState } from "react";

function StarRate({ rating, setRating }) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;

        return (
          <label key={currentRate} style={{ cursor: "pointer" }}>
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onChange={() => setRating(currentRate)}
              style={{ display: "none" }}
            />

            <MdStar
              size={24}
              color={currentRate <= rating ? "#e9b109" : "#d3d3d3"}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRate;
