import React from "react";
import Navbar from "../navbar/navbar.component";
import Hero from "../hero/hero.component";

const Header = ({ title = "" }) => {
  return (
    <div className="header" id={`header`}>
      <Navbar />
      <Hero title={title} />
    </div>
  );
};

export default Header;
