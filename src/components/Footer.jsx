import React from "react";
// import { Link } from 'react-router-dom';
import styles from "../styles/Footer.module.css";
import logoFooter from "../images/logo-footer.svg";
import appstoreImg from "../images/appstore.svg";
import googleplayImg from "../images/googleplay.svg";
import { HashLink as Link } from 'react-router-hash-link';


function Footer() {
  const {
    footerSectionTitle,
    storeSection,
    lev,
    footerLogo,
    sectionContainer,
  } = styles;

  return (
    <footer>
      <div className={sectionContainer}>
        <img src={logoFooter} className={footerLogo} alt="Lev footer" />
        <div>
          <p className={footerSectionTitle}>Contatos</p>
          <p><Link to="/help">Ajuda</Link></p>
          <a href="mailto:contato.lev@gmail.com">contato.lev@gmail.com</a>
        </div>
        <div>
          <p className={footerSectionTitle}>Baixe o app agora!</p>
          <div className={storeSection}>
            <a target="_blank" href="https://apps.apple.com/br/app/moby-app-motorista/id1483734161">
              <img src={appstoreImg} alt="appstore" />
            </a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=mobyapp.motorista&hl=en_US&gl=US">
              <img src={googleplayImg} alt="googleplay" />
            </a>
          </div>
        </div>
        <div>
          <p className={footerSectionTitle}>Seja motorista Lev!</p>
          <Link to="/driver#form" className={lev}>
            Quero ser motorista lev
          </Link>
        </div>
        <div>
          <p>Termos de Uso e Privacidade</p>
          <p>© 2022 lev brasil</p>
        </div>
        <div></div>
        <div></div>
        <div>
          <p className={footerSectionTitle}>
            Acompanhe a Lev nas redes sociais
          </p>
          <a target="_blank" href="https://www.facebook.com/levmoby">
            <i className="bi bi-facebook"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/levmoby/">
            <i className="bi bi-instagram"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/levmoby/">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;