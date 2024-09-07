import React from 'react';
import { FaTelegramPlane, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa'; 
import { SiAppstore, SiGoogleplay } from 'react-icons/si'; 
import '../Admin-Footer/AdminFooter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-icons">
        <a href="#" className="footer__icon-link"><FaTwitter /></a>
        <a href="#" className="footer__icon-link"><FaTelegramPlane /></a>
        <a href="#" className="footer__icon-link"><FaInstagram /></a>
        <a href="#" className="footer__icon-link"><FaTiktok /></a>
        <a href="#" className="footer__icon-link"><FaYoutube /></a>
      </div>

      <div className="footer__app-links">
        <a href="#" className="footer__app-link"><SiAppstore /> App Store</a>
        <a href="#" className="footer__app-link"><SiGoogleplay /> Google Play</a>
      </div>

      <div className="footer__info-links">
        <a href="#" className="footer__info-link">General Statement</a>
        <a href="#" className="footer__info-link">Legal Advice</a>
        <a href="#" className="footer__info-link">About Us</a>
        <a href="#" className="footer__info-link">DEXT Token</a>
        <a href="#" className="footer__info-link">Team</a>
        <a href="#" className="footer__info-link">Contact</a>
      </div>

      <div className="footer__copyright">
        © DEXT.io 2024 – <a href="mailto:info@dextools.io" className="footer__email">info@dextools.io</a> | Ads & Marketing: <a href="mailto:marketing@dextools.io" className="footer__email">marketing@dextools.io</a>
      </div>
    </footer>
  );
};

export default Footer;
