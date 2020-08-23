import React from "react";
import Page from "../../components/core.components/page/page.component";
import Section from "../../components/page.components/section/section";
import sections from "./contact.data";
const Contact = () => {
  // overlay: {},

  return (
    <Page title={"contact"} layout={"standard"}>
      {sections.map((s) => {
        const { id, shape, ...others } = s;
        return <Section key={id} id={id} shape={shape} {...others} />;
      })}
      <h3>Le contenu de la page {"Contact"}</h3>
    </Page>
  );
};

export default Contact;
