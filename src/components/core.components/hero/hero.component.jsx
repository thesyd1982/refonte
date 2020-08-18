import React from "react";
import "./hero.styles.scss";

import Carousel from "../carousel/carousel.component";
import Shape from "../shape/shape.component";

const bg = process.env.PUBLIC_URL + "/img/hero.jpg";

const Hero = ({ title, carousel = false, img = bg, children }) => {
  return (
    <Shape
      key={title}
      id={`hero-${title}`}
      shapeType={"hero"}
      classname={"hero"}
      img={img}
    >
      {carousel && <Carousel />}
      <h1>{title}</h1>
      {children}
    </Shape>
  );
};

export default Hero;
