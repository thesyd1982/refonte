import React from "react";
import "./section.styles.scss";
import SectionLayout from "../section/layout/section-layout";
import Shape from "../../core.components/shape/shape.component";
import Overlay from "../../core.components/overlay/overlay.component";

const Section = ({ shape, layout = "2cols", overlay, left, right }) => {
  const { id, ...otherShapeProps } = shape;

  if (overlay !== undefined) {
    const { color, ...otherOverlayProps } = overlay;
    return (
      <Shape
        key={id}
        id={`section-${id}`}
        classname={`section section-${id}`}
        {...otherShapeProps}
      >
        <Overlay color={color} {...otherOverlayProps}>
          <SectionLayout layout left right />
        </Overlay>
      </Shape>
    );
  } else
    return (
      <Shape
        key={id}
        id={`section-${id}`}
        classname={`section section-${id}`}
        {...otherShapeProps}
      >
        <SectionLayout layout={layout} left={left} right={right} />
      </Shape>
    );
};

export default Section;
