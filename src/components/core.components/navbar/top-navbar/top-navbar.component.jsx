import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./top-navbar.styles.scss";
import data from "./top-navbar-data";

const TopNavbar = () => {
  const handleScroll = () => {
    const scrollpos = window.scrollY;
    if (scrollpos > 10) {
      setScrolled("top-navbar scrolled");
    } else {
      setScrolled("top-navbar");
    }
  };
  const [scrolledState, setScrolled] = useState("top-navbar");
  useEffect(() => {
    // Met à jour le  document via l’API du navigateur
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolledState}>
      <ul className="menu-items">
        {data.links.map((link) => (
          <li key={link.id} className="menu-item">
            <Link className="link" to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="menu-socials">
        {data["social-links"].map((slink) => (
          <li key={slink.id} className="menu-social">
            <Link className="link" to={slink.path}>
              {slink.icon}
            </Link>
          </li>
        ))}
      </ul>
      <div className="phones">
        {data["phone-links"].map((plink) => (
          <a key={plink.id} className="phone" href={`tel:${plink.text}`}>
            <div className="phone__number">
              <div className="phone__number__icon">{plink.icon}</div>
              {plink.text}
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TopNavbar;
