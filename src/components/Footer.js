import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              PM
              <i class="fas fa-paper-plane" />
            </Link>
          </div>
          <small class="website-rights">Priscila Monteiro © 2022</small>
          <div class="social-icons">
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/in/pririmonteiro/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://github.com/PriscilaMonteiro"
              target="_blank"
              aria-label="Github"
              rel="noreferrer"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com/Pri_Schirmer"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <i class="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
