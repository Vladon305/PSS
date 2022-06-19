import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__social social">
            <a href="facebook.com" className="social__item _icon-fb"> </a>
            <a href="instagram.com" className="social__item _icon-insta"> </a>
            <a href="group.com" className="social__item _icon-Group"> </a>
            <a href="linkedin.com" className="social__item _icon-Linkedin"> </a>
          </div>
          <a href="copyright.com" className="footer__copy">Copyright ©2020 All rights reserved </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;