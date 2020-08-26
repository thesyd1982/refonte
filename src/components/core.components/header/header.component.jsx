import React from "react";
import Navbar from "../navbar/navbar.component";
import Hero from "../hero/hero.component";

const Header = ({ title = "", heroBg, carousel }) => {
  return (
    <div className="header" id={`header`}>
      <Navbar />
      <Hero title={title} heroBg={heroBg} carousel={carousel} />
    </div>
  );
};

export default Header;
