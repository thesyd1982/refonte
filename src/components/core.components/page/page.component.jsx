import React from "react";
import Layout from "../layout/layout.component";

const Page = ({ title, layout, heroBg, children }) => {
  return (
    <Layout title={title} name={layout} heroBg={heroBg}>
      {children}
    </Layout>
  );
};

export default Page;
