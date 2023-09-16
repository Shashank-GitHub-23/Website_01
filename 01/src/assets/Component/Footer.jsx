import React from 'react'

const Footer = () => {
  return (
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Digital Tech</h1>
          <p>Your destination for all tech Solutions</p>
        </div>
        <div className="footer-contact">
          <h2>Call Us</h2>
          <p>+91 989898XXXX</p>
        </div>
        <div className="footer-additional">
          <h3>Follow Us !!</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

