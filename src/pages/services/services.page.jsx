import React from "react";
import "./services.styles.scss";

import Page from "../../components/core.components/page/page.component";
import Section from "../../components/page.components/section/section";
import sections from "./services.data";
import LayoutSidebar from "../../components/core.components/layout/layout-sidebar.component";

const bg = process.env.PUBLIC_URL + "/img/services.jpg";

const Services = () => {
  return (
    <Page title={"services"} heroBg={bg} layout={LayoutSidebar}>
      {
        /*sections.map((s) => {
        const { id, shape, ...others } = s;
        return <Section key={id} id={id} shape={shape} {...others} />;
      })*/
        <Section
          id={sections[0].id}
          shape={sections[0].shape}
          left={sections[0].left}
          right={sections[0].right}
        />
      }
    </Page>
  );
};

export default Services;
