import React from "react";
import { Link } from "react-router-dom";
import "./top-navbar.styles.scss";
import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrLinkedinOption,
  GrPhone,
  // GrLocation,
} from "react-icons/gr";

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

      <ul className="menu-socials">
        <li className="menu-social">
          <Link className="link" to="#">
            <GrFacebookOption />
          </Link>
        </li>
        <li className="menu-social">
          <Link className="link" to="#">
            <GrTwitter />
          </Link>
        </li>
        <li className="menu-social">
          <Link className="link" to="#">
            <GrInstagram />
          </Link>
        </li>
        <li className="menu-social">
          <Link className="link" to="#">
            <GrLinkedinOption />
          </Link>
        </li>
      </ul>
      <div className="phone">
        <div className="phone__icon">
          <GrPhone />
        </div>
        <div className="phone__number">+33 6 10 10 10 50</div>
      </div>
    </div>
  );
};

export default TopNavbar;
