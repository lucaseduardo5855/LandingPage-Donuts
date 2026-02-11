import Logo from "../Assets/Logo.svg";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo donuts footer" />
        </div>

        <div className="footer-icons">
          <BsTwitter />
          <BsLinkedin />
          <BsYoutube />
          <BsFacebook />
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajudar</span>
          <span>Nossa Marca</span>
          <span>Carreira</span>
          <span>Nosso Trabalho</span>
        </div>

        <div className="footer-section-columns">
          <span>43 99171123</span>
          <span>lucas.eduardo5855@gmail.com</span>
        </div>

        <div className="footer-section-columns">
          <span>Termo & Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
