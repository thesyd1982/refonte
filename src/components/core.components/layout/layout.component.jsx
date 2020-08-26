import React from "react";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import "./layout.styles.scss";

const renderLayout = (title, heroBg, children) => {
  //1*****
  return (
    <div className="layout--standard">
      <Header title={title} heroBg={heroBg} />
      <main className="main" id={`main`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Layout = ({ title, heroBg, children }) => {
  return renderLayout(title, heroBg, children);
};

export default Layout;
