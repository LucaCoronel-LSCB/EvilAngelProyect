import { Instagram, Phone, Linkedin, Github } from "lucide-react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contain">
        <div className="branding">
          <h2 className="brand-name">Evil Angel</h2>
          <p className="slogan">La nueva generación</p>
        </div>
        <ul className="contain-ul">
          <li>
            {" "}
            <a href="https://wa.me/3516655470" className="contact-it">
              <Phone className="icon" />
              <span className="footer-text">3516655470</span>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://github.com/LucaCoronel-LSCB"
              className="contact-it"
            >
              <Github className="icon" />
              <span className="footer-text">LucaCoronel-LSCB</span>
            </a>
          </li>
        </ul>
        <ul className="contain-ul">
          <li>
            <a
              href="https://www.instagram.com/evil_angel.ok"
              className="contact-it"
            >
              <Instagram className="icon" />
              <span className="footer-text">evil_angel.ok</span>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/luca-coronel-398968353/"
              className="contact-it"
            >
              <Linkedin className="icon" />
              <span className="footer-text">linkeding</span>
            </a>
          </li>
        </ul>
        <div className="hours">
          <p>Horarios de atención: 24hs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
