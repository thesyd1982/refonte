import React from "react";
import Page from "../../../components/core.components/page/page.component";
import Layout from "../../../components/core.components/layout/layout.component";

const NoMatch = () => {
  return (
    <Page title={"error404"} layout={Layout}>
      <h3>Le contenu de la page {"error404"}</h3>
    </Page>
  );
};

export default NoMatch;
