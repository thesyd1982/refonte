import React from "react";
import Navbar from "../navbar/navbar.component";
import Hero from "../hero/hero.component";

const Header = () => {
  return (
    <div className="header" id={`header`}>
      <Navbar />
      <Hero title={`Hero`} />
    </div>
  );
};

export default Header;
