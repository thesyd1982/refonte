import React from "react";
import "./shop.styles.scss";

import Page from "../../components/core.components/page/page.component";
import Section from "../../components/page.components/section/section";
import sections from "./shop-sections";

const bg = process.env.PUBLIC_URL + "/img/shop.jpg";

const shop = () => {
  return (
    <Page title={"shop"} heroBg={bg} layout={"standard"}>
      {sections.map((s) => {
        const { id, shape, ...others } = s;
        return <Section key={id} id={id} shape={shape} {...others} />;
      })}
    </Page>
  );
};

export default shop;
