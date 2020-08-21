import React from "react";
import Page from "../../components/core.components/page/page.component";
import Section from "../../components/page.components/section/section";

const Contact = () => {
  const bgs1 = process.env.PUBLIC_URL + "/img/appart4.jpg";

  const left = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum
      possimus quo maxime deleniti optio laboriosam beatae inventore veniam illo
      quis, temporibus ab quia similique? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Nulla rerum possimus quo maxime deleniti optio
      laboriosam beatae inventore veniam illo quis, temporibus ab quia
      similique?
    </p>
  );

  const right = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum
      possimus quo maxime deleniti optio laboriosam beatae inventore veniam illo
      quis, temporibus ab quia similique? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Nulla rerum possimus quo maxime deleniti optio
      laboriosam beatae inventore veniam illo quis, temporibus ab quia
      similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      rerum possimus quo maxime deleniti optio laboriosam beatae inventore
      veniam illo quis, temporibus ab quia similique? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nulla rerum possimus quo maxime deleniti
      optio laboriosam beatae inventore veniam illo quis, temporibus ab quia
      similique?
    </p>
  );
  return (
    <Page title={"contact"} layout={"standard"}>
      <Section
        shape={{ id: 1, img: bgs1, shapeType: "s1", classname: "toto" }}
        layout="2cols"
        left={left}
        right={right}
      />
      <h3>Le contenu de la page {"Contact"}</h3>
    </Page>
  );
};

export default Contact;
