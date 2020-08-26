import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PageContext from "../../../context/page-context";

import "./hero.styles.scss";

import Carousel from "../carousel/carousel.component";
import Shape from "../shape/shape.component";

const heroContent = (title, children, path) => {};

const heroRender = (path, title, heroBg, children) => {
  let img = {};
  let content = {};

  if (path === "/") {
    content = <Carousel>{children}</Carousel>;
  } else {
    img = { heroBg };
    content = (
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

  return (
    <Shape
      key={title}
      id={`hero-${title}`}
      shapeType={"hero"}
      classname={`hero ${title}`}
      img={img}
    >
      {content}
    </Shape>
  );
};

const Hero = ({ title, heroBg, children }) => {
  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <Shape
      key={title}
      id={`hero-${title}`}
      shapeType={"hero"}
      classname={`hero ${title}`}
      img={heroBg}
    >
      {heroRender(location.pathname, title, heroBg, children)}
    </Shape>
  );
};

export default Hero;
