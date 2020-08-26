import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import links from "./links.js";
import "./public-navbar.styles.scss";

const PublicNavbar = () => {
  const handleScroll = () => {
    const scrollpos = window.scrollY;
    if (scrollpos > 16) {
      setScrolled("scrolled");
    } else {
      setScrolled("");
    }
  };
  const [scrolledState, setScrolled] = useState("");
  useEffect(() => {
    // Met à jour le  document via l’API du navigateur
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar--public ${scrolledState}`}>
      <div className={`navbar--public__menu ${scrolledState}`}>
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={`menu-item ${scrolledState}`}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default PublicNavbar;
