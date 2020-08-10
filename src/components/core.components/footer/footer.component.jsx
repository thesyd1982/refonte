import React from "react";
import "./footer.styles.scss";
import FouterColumn from "./footer-column/footer-column";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="footer" id={`footer`}>
      <div className="footer-columns">
        <FouterColumn title={"Title 1"}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ea
            quos soluta inventore, laboriosam fugit.
          </p>
        </FouterColumn>
        <FouterColumn title={"Title 2"}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ea
            quos soluta inventore, laboriosam fugit.
          </p>
        </FouterColumn>
        <FouterColumn title={"Title 3"}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ea
            quos soluta inventore, laboriosam fugit.
          </p>
        </FouterColumn>
      </div>
      <div className="copyright">
        © {currentYear} SysDev | Tous droits réservés.
      </div>
    </div>
  );
};

export default Footer;
