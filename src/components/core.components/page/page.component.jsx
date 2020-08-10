import React from "react";
import Layout from "../layout/layout.component";

const Page = ({ title, layout, children }) => {
  return <Layout name={layout}>{children}</Layout>;
};

export default Page;
