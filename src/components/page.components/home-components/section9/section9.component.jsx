import React from "react";
import "./section9.styles.scss";

import Shape from "../../../core.components/shape/shape.component";

import AButton from "../../../core.components/button/aButton/aButton.component";

const Section9 = ({ id }) => {
  return (
    <Shape key={id} id={`section-${id}`} classname={"section"} >
      <div className="container">
        <h3>Profitez de votre comfort</h3>
        <form action="" method="post">
          <input type="text" />
        </form>
        <AButton link={"/"} text={"En savoir plus"}></AButton>
      </div>
    </Shape>
  );
};

export default Section9;
