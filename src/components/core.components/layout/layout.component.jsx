import React from "react";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import "./layout.styles.scss";

const renderLayout = (title, name, children) => {
  if (name === "standard")
    return (
      <div className="layout--standard">
        <Header title={title} />
        <main className="main" id={`main`}>
          {children}
        </main>
        <Footer />
      </div>
    );
};

const Layout = ({ title, name, children }) => {
  return renderLayout(title, name, children);
};

export default Layout;
