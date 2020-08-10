import React from "react";
import "./footer-column.styles.scss";
const FooterColumn = ({ id, title, children }) => {
  return (
    <div className={"footer-column"} id={`footer-column${id}`}>
      <h3 className="title">{title}</h3>
      <div className="footer-column--body">{children}</div>
    </div>
  );
};

export default FooterColumn;
