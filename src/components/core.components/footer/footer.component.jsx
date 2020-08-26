import React from "react";
import "./footer.styles.scss";
import FooterMain from "./footer-main/footer-main.component";
import FooterBottom from "./footer-bottom/footer-bottom.component";
import Overlay from "../overlay/overlay.component";
import Shape from "../shape/shape.component";

const Footer = () => {
  const bg = process.env.PUBLIC_URL + "/img/footer_bg.jpg";

  return (
    <footer className="footer" img={bg} id={`footer`}>
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
