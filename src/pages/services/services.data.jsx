import React from "react";
import AButton from "../../components/core.components/button/aButton/aButton.component";
import { Fragment } from "react";
import LayoutSideBar from "../../components/core.components/layout/layout.component";

const cam = process.env.PUBLIC_URL + "/img/cam.png";
const bg = process.env.PUBLIC_URL + "/img/section2.jpg";
const sections = [
  {
    id: 2,
    shape: {
      id: 2,
      shapeType: "s2",
      img: bg,
      h: "120vh",
    },
    left: <img src={cam} alt="" srcSet="" />,
    right: (
      <Fragment>
        <span className="cam-title"> Nos cameras supportent </span>
        <span className="cam-title"> L 'Audio bidirectionnel</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Nulla rerum
          possimus quo maxime deleniti optio laboriosam beatae inventore veniam
          illo quis, temporibus ab quia similique ?
        </p>{" "}
        <div className="cam-icons">
          <div className="cam-icon"> test 1 </div>
          <div className="cam-icon cam-icon--big"> test 2 </div>

          <div className="cam-icon"> test 3 </div>
        </div>
        <div className="cam-button">
          <AButton link={"/"} text={"Découvrir nos cameras"}>
            {" "}
          </AButton>
        </div>
      </Fragment>
    ),
  },
];

export default sections;
