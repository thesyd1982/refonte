import React from "react";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import "./layout.styles.scss";

const renderLayout = (name, title, heroBg, children) => {
  if (name === "standard")
    return (
      <div className="layout--standard">
        <Header
          name={name}
          title={title}
          heroBg={heroBg}
          carousel={true}
          children={children}
        />
        <main className="main" id={`main`}>
          {children}
        </main>
        <Footer />
      </div>
    );
};

const Layout = ({ name, title, heroBg, children }) => {
  return renderLayout(name, title, heroBg, children);
};

export default Layout;
