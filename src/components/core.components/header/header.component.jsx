import React from "react";
import Navbar from "../navbar/navbar.component";
import Hero from "../hero/hero.component";

const Header = ({ title = "", heroBg, carousel }) => {
  return (
    <header className="header" id={`header`}>
      <Navbar />
      <Hero title={title} heroBg={heroBg} />
    </header>
  );
};

export default Header;
