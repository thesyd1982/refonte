import React from "react";
import "./section6.styles.scss";

import Shape from "../../../core.components/shape/shape.component";
import AButton from "../../../core.components/button/aButton/aButton.component";

const ipcam = process.env.PUBLIC_URL + "/img/ip-camera.jpg";

const Section6 = ({ id }) => {
  return (
    <Shape
      key={id}
      id={`section-${id}`}
      classname={"section"}
      lin={
        "linear-gradient(0deg, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)"
      }
      shapeType={"s6"}
    >
      <div className="columns">
        <div className="col-left">
          <h3>IP CAMERA AVEC NIGHT VISION</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
            cum mollitia saepe, iure et, qui id illo culpa pariatur sequi enim
            ducimus dolorum laboriosam, laudantium molestiae nemo recusandae!
            Totam?
          </p>
          <div className="ip-cams-button">
            {" "}
            <AButton
              cl={"a-button a-button--black"}
              link={"/"}
              text={"En savoir plus"}
            ></AButton>
            <AButton link={"/"} text={"Essayer maintenant"}></AButton>
          </div>
        </div>
        <div className="col-right">
          <img src={ipcam} alt="" srcSet="" />
        </div>
      </div>
      <Shape
        key={10}
        id={"triangle-2"}
        classname={"triangle-2"}
        shapeType={"triangle-2"}
        lin="linear-gradient(45deg, rgba(0,0,0,.6),rgba(255,255,255,.3))"
      ></Shape>
    </Shape>
  );
};

export default Section6;
