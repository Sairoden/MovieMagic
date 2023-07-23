import { useState } from "react";

import { useMovieContext } from "../context/movie_context";

import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const { setUserRating } = useMovieContext();

  const handleRating = rating => {
    setRating(rating);
    setUserRating(rating);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i + 1}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            handleRating={() => handleRating(i + 1)}
            handleHoverIn={() => setTempRating(i + 1)}
            handleHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || ""}
      </p>
    </div>
  );
};

export default StarRating;
