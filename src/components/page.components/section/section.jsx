import React from "react";
import SectionLayout from "../section/layout/section.layout";
import Shape from "../../core.components/shape/shape.component";
const Section = ({ shape, layout = "2cols", left, right }) => {
  const { id, ...otherProps } = shape;
  return (
    <Shape id={`section-${id}`} {...otherProps}>
      <SectionLayout layout={layout} left={left} right={right} />
    </Shape>
  );
};

export default Section;
