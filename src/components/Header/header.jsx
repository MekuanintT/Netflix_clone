import { useEffect, useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.logo}>NETFLIX</div>

      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">New & Popular</a>
        <a href="#">My List</a>
        <a href="#">Browse by Language</a>
      </nav>
    </header>
  );
};

export default Header;
