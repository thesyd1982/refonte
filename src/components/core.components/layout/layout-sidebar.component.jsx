import React from "react";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import Sidebar from "../sidebar/sidebar.component";
import "./layout.styles.scss";

const LayoutSideBar = ({ title, heroBg, mainContent, sidebarContent }) => {
  return (
    <div className="layout--sidebar">
      <Header title={title} heroBg={heroBg} />
      <main className="main" id={`main`}>
        {mainContent}
      </main>
      <Sidebar children={sidebarContent} />
      <Footer />
    </div>
  );
};

export default LayoutSideBar;
