import React from "react";
import "./section.layout.styles.scss";

const SectionLayout = ({ layout, left, right }) => {
  if (layout === "2cols")
    return (
      <div className="section-layout">
        <div className="content">
          <div className="content__columns">
            <div className="content__columns__column1">{left}</div>
            <div className="content__columns__column2">{right}</div>
          </div>
        </div>
      </div>
    );
};

export default SectionLayout;
