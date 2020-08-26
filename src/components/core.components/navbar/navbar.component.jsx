import React from "react";
import PrivateNavbar from "./private-navbar/private-navbar";
import PublicNavbar from "./public-navbar/public-navbar";
import TopNavbar from "./top-navbar/top-navbar.component";
import "./navbar.styles.scss";

const Navbar = () => {
  const user = false;
  return (
    <nav className="navbar">
      <TopNavbar />
      {user ? <PrivateNavbar /> : <PublicNavbar />}
    </nav>
  );
};

export default Navbar;
