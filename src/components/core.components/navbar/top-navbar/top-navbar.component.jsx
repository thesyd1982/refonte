import React from "react";
import { Link } from "react-router-dom";
import "./top-navbar.styles.scss";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <ul className="menu-items">
        <li className="menu-item">
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="menu-item">
          <Link className="link" to="/">
            Plan du site
          </Link>
        </li>
        <li className="menu-item">
          <Link className="link" to="/">
            Téléchargement
          </Link>
        </li>
        <li className="menu-item">
          <Link className="link" to="/">
            Mentions légales
          </Link>
        </li>
        <li className="menu-item">
          <Link className="link" to="#">
            Espace Client
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
