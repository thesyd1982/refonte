import React from "react";

const color1 = "rgba(239,239,239,1)";
const color2 = "rgba(209,209,209,1)";
const linear = `linear-gradient(0deg,  ${color2} 0%,  ${color1} 100%)`;

const shapes = {
  rectangle: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  circle: "circle(50% at 50% 50%)",
  hp: "polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)",
  sp: "polygon(0% 100%, 100% 80%, 100% 0%, 0% 0%)",

  triangle: "polygon(0 39%, 0 0, 100% 18%)",
  s1: "polygon(0% 100%, 100% calc(100% - 10vw), 100% 0%, 0% 0%)",
  s2: "polygon(0 10vw, 100% 0%, 100% calc(100% - 10vw), 0% 100%)",
  s3: "polygon(0 10vw, 100% 0, 100% 100%, 0 calc(100% - 10vw))",
  s5: "polygon(0 10vw, 100% 0%, 100% 100%,0 calc(100% - 10vw))",
  s6: "polygon(0 0, 100% 10vw, 100% calc(100% - 10vw), 0 100%)",
  s7: "polygon(0 10vw, 100% 0, 100% calc(100% - 10vw), 0% 100%)",
  s8: "polygon(0 10vw, 100% 0%, 100% 100%, 0 calc(100% - 10vw))",
  s9: "polygon(0 0, 100% 10vw, 100% 100%, 0 100%)",
  spacer1: "polygon(0 10vw, 0 0, 50% 5vw)",
  "triangle-2": "polygon(0 20vw, 0 0, 100% 10vw)",
};

const Shape = ({
  id,
  classname,
  img,
  lin = linear,
  w,
  h,
  clipPath = shapes["rectangle"],
  shapeType,
  children,
}) => {
  if (shapeType !== "" && shapes[shapeType] !== undefined) {
    clipPath = shapes[shapeType];
  }

  return (
    <div
      id={id}
      className={`shape ${classname}`}
      style={{
        background: `url(${img}),${lin}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: `${h}`,
        width: `${w}`,
        clipPath: `${clipPath}`,
        // border:'1px transparent solid'
      }}
    >
      {children}
    </div>
  );
};

export default Shape;
