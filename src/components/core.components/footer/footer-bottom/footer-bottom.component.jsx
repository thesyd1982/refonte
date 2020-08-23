import React from "react";
import "./footer-bottom.styles.scss";
const FooterBottom = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="footer__bottom">
      <div className="copyright">
        © {currentYear} SysDev | Tous droits réservés.
      </div>
    </div>
  );
};

export default FooterBottom;
