import React from "react";
import "./footer.styles.scss";
import FouterColumn from "./footer-column/footer-column";
import Overlay from "../overlay/overlay.component";
import Shape from "../shape/shape.component";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const bg = process.env.PUBLIC_URL + "/img/footer_bg.jpg";

  return (
    <Shape className="footer" img={bg} id={`footer`}>
      <Overlay color={"rgba(0,0,0,.85)"}>
        <div className="footer-columns">
          <FouterColumn title={"Title 1"}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              ea quos soluta inventore, laboriosam fugit.
            </p>
          </FouterColumn>
          <FouterColumn title={"Title 2"}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              ea quos soluta inventore, laboriosam fugit.
            </p>
          </FouterColumn>
          <FouterColumn title={"Title 3"}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              ea quos soluta inventore, laboriosam fugit.
            </p>
          </FouterColumn>
        </div>
      </Overlay>

      <div className="copyright">
        © {currentYear} SysDev | Tous droits réservés.
      </div>
    </Shape>
  );
};

export default Footer;
