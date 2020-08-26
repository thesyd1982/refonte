import React from "react";

const Page = ({ title, layout, heroBg, children }) => {
  return <>{layout({ title, heroBg, children })}</>;
};

export default Page;
