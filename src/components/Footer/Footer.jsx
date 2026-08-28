import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const footerColumns = [
  {
    title: "Popular",
    links: [
      "Popular Movies",
      "Popular TV Shows",
      "Trending Now",
      "New Releases",
    ],
  },
  {
    title: "Explore",
    links: ["Browse by Genre", "Netflix Originals", "Coming Soon", "Top 10"],
  },
  {
    title: "Help & Support",
    links: ["Help Center", "Account", "Ways to Watch", "Contact Us"],
  },
  {
    title: "Legal",
    links: [
      "Privacy",
      "Cookie Preferences",
      "Terms of Use",
      "Corporate Information",
    ],
  },
];

const Footer = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Links */}
        <div className={styles.socialSection}>
          <a
            href="#"
            className={styles.socialLink}
            aria-label="Facebook"
            onClick={handleLinkClick}
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className={styles.socialLink}
            aria-label="Instagram"
            onClick={handleLinkClick}
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className={styles.socialLink}
            aria-label="Twitter"
            onClick={handleLinkClick}
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className={styles.socialLink}
            aria-label="YouTube"
            onClick={handleLinkClick}
          >
            <FaYoutube />
          </a>
        </div>

        {/* Help Text */}
        <p className={styles.questions}>
          Questions?{" "}
          <a href="#" onClick={handleLinkClick}>
            Contact us.
          </a>
        </p>

        {/* Footer Columns */}
        <div className={styles.columns}>
          {footerColumns.map((column) => (
            <div className={styles.column} key={column.title}>
              <h3 className={styles.columnTitle}>{column.title}</h3>

              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" onClick={handleLinkClick}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.logo}>NETFLIX</div>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Netflix Clone. All rights reserved.
          </p>

          <div className={styles.languageSelector}>
            <span className={styles.globe}>◎</span>
            <select
              className={styles.language}
              defaultValue="English"
              aria-label="Language"
            >
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="French">Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
