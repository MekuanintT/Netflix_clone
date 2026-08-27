import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  // T-07: scroll-aware header background
  const [isScrolled, setIsScrolled] = useState(false);

  // T-08: search and profile dropdown
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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
      {/* T-07: Logo + Navigation */}
      <div className={styles.leftSection}>
        <div className={styles.logo}>NETFLIX</div>

        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse by Language</a>
        </nav>
      </div>

      {/* T-08: Search + Notifications + Profile */}
      <div className={styles.rightSection}>
        {/* Search */}
        <div
          className={`${styles.searchContainer} ${
            searchOpen ? styles.searchOpen : ""
          }`}
        >
          <button
            className={styles.iconButton}
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>

          {searchOpen && (
            <input
              type="text"
              placeholder="Titles, people, genres"
              className={styles.searchInput}
              autoFocus
            />
          )}
        </div>

        {/* Notifications */}
        <button
          className={styles.iconButton}
          aria-label="Notifications"
        >
          <svg viewBox="0 0 24 24" className={styles.icon}>
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>

          <span className={styles.notificationBadge}></span>
        </button>

        {/* Profile + Dropdown */}
        <div className={styles.profileContainer}>
          <button
            className={styles.profileButton}
            onClick={() => setProfileOpen((prev) => !prev)}
            aria-label="Profile"
          >
            <svg viewBox="0 0 24 24" className={styles.profileIcon}>
              <circle cx="12" cy="8" r="3" />
              <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
            </svg>
          </button>

          <button
            className={styles.arrowButton}
            onClick={() => setProfileOpen((prev) => !prev)}
            aria-label="Account menu"
          >
            <svg viewBox="0 0 24 24" className={styles.arrow}>
              <polyline
                points={
                  profileOpen
                    ? "6 15 12 9 18 15"
                    : "6 9 12 15 18 9"
                }
              />
            </svg>
          </button>

          {profileOpen && (
            <div className={styles.dropdown}>
              <a href="#">Account</a>
              <a href="#">Help Center</a>
              <a href="#">Sign out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
