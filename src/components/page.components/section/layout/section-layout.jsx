import React from "react";
import "./section-layout.styles.scss";

const SectionLayout = ({
  layout,
  left = <div>left</div>,
  right = <div>right</div>,
}) => {
  if (layout === "2cols")
    return (
      <div className="section-layout">
        <div className="cols auto-grid">
          <div className="col-l">{left}</div>
          <div className="col-r">{right}</div>
        </div>
      </div>
    );
};

export default SectionLayout;
