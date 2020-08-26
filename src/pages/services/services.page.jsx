import React from "react";
import "./services.styles.scss";

import Page from "../../components/core.components/page/page.component";
import Section from "../../components/page.components/section/section";
import sections from "./services-sections";

const bg = process.env.PUBLIC_URL + "/img/services.jpg";

const Services = () => {
  return (
    <Page title={"services"} heroBg={bg} layout={"standard"}>
      {sections.map((s) => {
        const { id, shape, ...others } = s;
        return <Section key={id} id={id} shape={shape} {...others} />;
      })}
    </Page>
  );
};

export default Services;
