import React from "react";

const SectionLayout = ({ layout, left, right }) => {
  if (layout === "2cols")
    return (
      <div className="section">
        <div className="content">
          <div className="columns">
            <div className="col-left">{left}</div>
            <div className="col-right">{right}</div>
          </div>
        </div>
      </div>
    );
};

export default SectionLayout;
