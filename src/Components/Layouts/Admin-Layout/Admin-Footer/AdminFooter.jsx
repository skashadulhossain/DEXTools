import React from 'react';
import footerimg1 from './Image/appstore.svg';
import footerimg2 from './Image/googleplay.svg';
import { FaIdCard, FaInstagram, FaTelegram, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import '../Admin-Footer/AdminFooter.css';

const Footer = () => {
  return (
            <footer className="Token-footer-section">
                <div className="Token-footer-container">
                    <div className="Token-footer-icon-box">
                        <a href="#"><FaXTwitter className="Token-footer-icon" /></a>
                        <a href="#"><FaTelegram className="Token-footer-icon" /></a>
                        <a href="#"><FaIdCard className="Token-footer-icon" /></a>
                        <a href="#"><FaInstagram className="Token-footer-icon" /></a>
                        <a href="#"><FaTiktok className="Token-footer-icon" /></a>
                        <a href="#"><FaYoutube className="Token-footer-icon" /></a>
                    </div>
                    <div className="Token-footer-content">
                        <div className="Token-footer-img-box">
                            <img src={footerimg1} alt="" />
                            <img src={footerimg2} alt="" />
                        </div>
                        <div className="Token-footer-link-content">
                            <div className="Token-footer-link-box">
                                <a href="#">General Statement</a>
                                <a href="#">Legal Advice</a>
                                <a href="#">Aout us</a>
                                <a href="#">DEXT Token</a>
                                <a href="#">Team</a>
                                <a href="#">Contact</a>
                            </div>
                            <div className="Token-footer-link-box">
                                <p><span>&copy; DEXTools.io 2024 - <a href="#">info@dextools.io</a></span>
                                <span>|</span><span>Ads & Marketing: <a href="#">marketing@dextools.io</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
  );
};

export default Footer;
