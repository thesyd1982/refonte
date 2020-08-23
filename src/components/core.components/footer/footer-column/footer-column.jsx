import React from "react";
import "./footer-column.styles.scss";

const FooterColumn = ({ classname, title, children }) => {
  return (
    <div className={`footer__main__column ${classname}`}>
      <h3 className="footer__main__column__title">{title}</h3>
      <div className="footer__main__column__body">{children}</div>
    </div>
  );
};

export default FooterColumn;
