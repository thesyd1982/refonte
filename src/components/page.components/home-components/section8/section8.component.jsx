import React from "react";
import "./section8.styles.scss";

import Shape from "../../../core.components/shape/shape.component";

import AButton from "../../../core.components/button/aButton/aButton.component";

const cameraControl = "/img/camera-control.jpg";

const Section8 = ({ id }) => {
  return (
    <Shape
      key={id}
      id={`section-${id}`}
      classname={"section"}
      lin="linear-gradient(45deg, rgba(255,255,255,1),rgba(255,255,255,1))"
      shapeType={"s8"}
    >
      <div className="columns">
        <div className="col-left">
          <img src={cameraControl} alt="" srcSet="" />
        </div>
        <div className="col-right">
          <h3>EVERYTHING YOU NEED</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            convallis accumsan mi nec elementum. Nulla ante metus, varius non
            condimentum, molestie nec tellus. Fusce odio nulla, consectetur in
            sagittis eget.
          </p>

          <div className="ip-cams-button">
            <AButton
              cl={"a-button a-button--black"}
              link={"/"}
              text={"En savoir plus"}
            ></AButton>
            <AButton link={"/"} text={"Essayer maintenant"}></AButton>
          </div>
        </div>
      </div>
    </Shape>
  );
};

export default Section8;
