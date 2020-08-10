import React from "react";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import "./layout.styles.scss";

const renderLayout = (name, children) => {
  if (name === "standard")
    return (
      <div className="layout--standard">
        <Header />
        <main className="main" id={`main`}>
          {children}
        </main>
        <Footer />
      </div>
    );
};

const Layout = ({ name, children }) => {
  return renderLayout(name, children);
};

export default Layout;
