import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PageContext from "../../../context/page-context";

import "./hero.styles.scss";

import Carousel from "../carousel/carousel.component";
import Shape from "../shape/shape.component";

const heroContent = (title, children, path) => {
  if (path === "/") {
    return <Carousel>{children}</Carousel>;
  } else {
    return (
      <Fragment>
        <h1 className={"page-title"}>{title}</h1>
        <span className={"subtitle"}>
          <Link to={"/"}>Home</Link>
          {` / ${title}`}
        </span>
        {children}
      </Fragment>
    );
  }
};

const Hero = ({ title, heroBg, children }) => {
  let location = useLocation();

  useEffect(() => {
    console.log("view updated");
  }, [location]);

  return (
    <Shape
      key={title}
      id={`hero-${title}`}
      shapeType={"hero"}
      classname={`hero ${title}`}
      img={heroBg}
    >
      {heroContent(title, children, location.pathname)}
    </Shape>
  );
};

export default Hero;
