import React from "react";
import FouterColumn from "../footer-column/footer-column";
import "./footer-main.styles.scss";

const FooterMain = () => {
  return (
    <div className="footer__main">
      <FouterColumn classname="col-1" title={"Title 1"} key={1} id={1}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ea
          quos soluta inventore, laboriosam fugit.
        </p>
      </FouterColumn>
      <FouterColumn classname="col-2" title={"Title 2"} key={2} id={2}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ea
          quos soluta inventore, laboriosam fugit.
        </p>
      </FouterColumn>
      <FouterColumn classname="col-3" title={"Title 3"} key={3} id={3}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ea
          quos soluta inventore, laboriosam fugit.
        </p>
      </FouterColumn>
    </div>
  );
};

export default FooterMain;
