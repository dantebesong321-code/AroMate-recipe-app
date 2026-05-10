import { MdStar } from "react-icons/md";

import { useState } from "react";

function StarRate(props) {
  const [rating, setRating] = useState(null);
  const [rateColor, setColor] = useState(null);
  const [feedback, setFeedback] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />
              <MdStar
                size={"24px"}
                color={currentRate <= (rateColor || rating) ? "yellow" : "grey"}
              />
            </label>
          </>
        );
      })}
    </>
  );
}

export default StarRate;
