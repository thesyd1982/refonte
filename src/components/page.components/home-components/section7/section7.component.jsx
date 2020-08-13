import React from "react";
import "./section7.styles.scss";

import Shape from "../../../core.components/shape/shape.component";

import AButton from "../../../core.components/button/aButton/aButton.component";
import Overlay from "../../../core.components/overlay/overlay.component";
const bg = "/img/bg-section-7.jpg";

const Section7 = ({ id }) => {
  return (
    <Shape
      key={id}
      id={`section-${id}`}
      classname={"section"}
      shapeType={"s7"}
      img={bg}
    >
      <Overlay>
        <div className="stitle">
          <h3>MODERN LIFE AND WORK PULLS</h3>
          <span>Us All In A Million Different Directions</span>
        </div>
        <div className="sinfos">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni hic
            accusantium sit totam porro eum ipsa voluptatum? Rem, ipsa aut
            repudiandae nobis dicta cumque nemo, obcaecati, tempora libero
            reiciendis accusamus.
          </p>
          <AButton link={"/"} text={"GETTING STARTED"} />
        </div>
      </Overlay>
    </Shape>
  );
};

export default Section7;
