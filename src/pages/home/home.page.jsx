import React from "react";
import Page from "../../components/core.components/page/page.component";
import "./home.styles.scss";
import Shape from "../../components/core.components/shape/shape.component";

import Section1 from "../../components/page.components/home-components/section1/section1.component";
import Section2 from "../../components/page.components/home-components/section2/section2.component";
import Section3 from "../../components/page.components/home-components/section3/section3.component";
import Section4 from "../../components/page.components/home-components/section4/section4.component";
import Section5 from "../../components/page.components/home-components/section5/section5.component";
import Section6 from "../../components/page.components/home-components/section6/section6.component";
import Section7 from "../../components/page.components/home-components/section7/section7.component";
import Section8 from "../../components/page.components/home-components/section8/section8.component";
import Section9 from "../../components/page.components/home-components/section9/section9.component";
import Section  from "../../components/page.components/section/section";

import sections from "./sections";
import Layout from "../../components/core.components/layout/layout.component";
const Home = () => {
  const bg = process.env.PUBLIC_URL + "/img/appart4.jpg";
  const cams = process.env.PUBLIC_URL + "/img/cameras.png";
  return (
    <Page title={"home"} layout={Layout} heroBg={bg}>
      <Section
        id={10}
        shape={{ id: 1, shapeType: "contact-s1", img: bg }}
        left={<img src={cams} alt="" srcSet="" />}
        right={<img src={cams} alt="" srcSet="" />}
      />
      {/* <Section1 id={1} /> */}
      {/* <Section2 id={2} /> */}

      <Section
        id={sections[0].id}
        shape={sections[0].shape}
        left={sections[0].left}
        right={sections[0].right}
      />
      <Section3 id={3} />

      <Shape
        key={4}
        classname={"spacer-1"}
        shapeType={"spacer1"}
        lin="linear-gradient(45deg, #f1f1f1,#d1d1d1 )"
      ></Shape>
      <Section4 id={4} />
      <Section5 id={5} />
      <Section6 id={6} />

      <Shape
        key={8}
        classname={"spacer-2"}
        shapeType={"triangle"}
        w="50vw"
        h="40vh"
        lin="linear-gradient(45deg, #f1f1f1,#d1d1d1 )"
      ></Shape>
      <Section7 id={7} />
      <Section8 id={8} />

      <Section9 id={9} />
    </Page>
  );
};

export default Home;
