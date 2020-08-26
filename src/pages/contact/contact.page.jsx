import React from "react";
import Page from "../../components/core.components/page/page.component";
import Section from "../../components/page.components/section/section";
import sections from "./contact.data";
const Contact = () => {
  const bg = process.env.PUBLIC_URL + "/img/section2.jpg";

  return (
    <Page title={"contact"} heroBg={bg} layout={"standard"}>
      {sections.map((s) => {
        const { id, shape, ...others } = s;
        return <Section key={id} id={id} shape={shape} {...others} />;
      })}
    </Page>
  );
};

export default Contact;
