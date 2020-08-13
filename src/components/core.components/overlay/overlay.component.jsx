import React from "react";
import "./overlay.styles.scss";

const Overlay = ({
  color = "rgba(54, 54, 54, .6)",
  opacity = "1",
  children,
}) => {
  return (
    <div className="overlay">
      <div
        className="wrap"
        style={{
          opacity: opacity,
          backgroundColor: color,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Overlay;
