import { Instagram, Phone, Linkedin, Github } from "lucide-react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="branding">
          <h2 className="brand-name">Evil Angel</h2>
          <p className="slogan">La nueva generación</p>
        </div>
        <ul className="container-ul">
          <li>
            {" "}
            <a href="https://wa.me/3516655470" className="contact-item">
              <Phone className="icon" />
              <span className="footer-text">3516655470</span>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://github.com/LucaCoronel-LSCB"
              className="contact-item"
            >
              <Github className="icon" />
              <span className="footer-text">LucaCoronel-LSCB</span>
            </a>
          </li>
        </ul>
        <ul className="container-ul">
          <li>
            <a
              href="https://www.instagram.com/evil_angel.ok"
              className="contact-item"
            >
              <Instagram className="icon" />
              <span className="footer-text">evil_angel.ok</span>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/luca-coronel-398968353/"
              className="contact-item"
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
