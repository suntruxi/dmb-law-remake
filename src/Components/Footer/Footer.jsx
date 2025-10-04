import React from "react";
import "./Footer.css";
import linkedinIcon from "../../assets/linkedin-icon.png"; // Replace with your LinkedIn icon path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: office@dmblaw.ro</p>
          <p>Phone: +40727101633</p>
          <p>Address: Sos. Pipera, nr. 1/VII, Nord City Tower, Etajul 10, Voluntari, Jud. Ilfov</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/diana-maria-bejenaru-07674a194/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DMB Law. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
