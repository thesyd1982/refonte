import React from "react";
import "./hero.styles.scss";

import Carousel from "../carousel/carousel.component";

const image = process.env.PUBLIC_URL + "/img/hero.jpg";
// const background =  process.env.PUBLIC_URL + '/img/hero.jpg';
const cpath = "polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)";
const color1 = "rgba(239,239,239,1)";
const color2 = "rgba(209,209,209,1)";
const linear = `linear-gradient(0deg,  ${color2} 0%,  ${color1} 100%)`;

const Hero = ({
  title,
  carousel = false,
  img = image,
  w,
  h,
  lin = linear,
  clipPath = cpath,
  children,
}) => {
  return (
    <div
      className="hero"
      style={{
        background: `url(${img}), ${lin}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: `${h}`,
        width: `${w}`,
        clipPath: `${clipPath}`,
      }}
    >
      {carousel && <Carousel />}
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Hero;
