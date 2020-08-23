import React from "react";
import "./section5.styles.scss";

import Shape from "../../../core.components/shape/shape.component";
import Overlay from "../../../core.components/overlay/overlay.component";

const camerasdcard = "/img/camerasdcard.png";
const bg = "/img/bg-section-5.jpg";

const Section5 = ({ id }) => {
  return (
    <Shape
      key={id}
      id={`section-${id}`}
      classname={"section"}
      shapeType={"s5"}
      img={bg}
    >
      <Overlay>
        <div className="columns">
          <div className="col-left">
            <h3>Enregistrement Local</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
              cum mollitia saepe, iure et, qui id illo culpa pariatur sequi enim
              ducimus dolorum laboriosam, laudantium molestiae nemo recusandae!
              Totam?
            </p>
            <img src={camerasdcard} alt="" srcSet="" />
          </div>
          {/* <div className="col-right"></div> */}
        </div>
      </Overlay>
    </Shape>
  );
};

export default Section5;
