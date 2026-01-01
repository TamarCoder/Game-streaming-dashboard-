"use client";

import React from "react";
import styles from "./Header.module.scss";
import NotificationModal from "./NotificationModal/NotificationModal";

const Header: React.FC = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] =
    React.useState(false);

  const handleBellClick = () => {
    setIsNotificationModalOpen(true);
    console.log("Notification modal opened");
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__logo}>
          <span className={styles["header__logo-icon"]}>🎮</span>
          <span className={styles["header__logo-text"]}>
            GAME<span>_Store</span>
          </span>
        </div>
        <nav className={styles.header__nav}>
          <a
            href="/"
            className={`${styles["header__nav-link"]} ${styles["header__nav-link--active"]}`}
          >
            HOME
          </a>
          <a href="/streams" className={styles["header__nav-link"]}>
            STREAMS
          </a>
          <a href="/store" className={styles["header__nav-link"]}>
            GAME STORE
          </a>
          <a href="/cyberspot" className={styles["header__nav-link"]}>
            CYBERSPOT
          </a>
          <a href="/news" className={styles["header__nav-link"]}>
            NEWS
          </a>
        </nav>
      </div>
      <div className={styles.header__right}>
        <div className={styles.header__notification_wrapper}>
          <button
            className={styles["header__icon-btn"]}
            onClick={handleBellClick}
          >
            <span className={styles["icon-bell"]}>🔔</span>
          </button>
          {isNotificationModalOpen && (
            <NotificationModal
              isOpen={isNotificationModalOpen}
              onClose={() => setIsNotificationModalOpen(false)}
            />
          )}
        </div>

        <button className={styles["header__icon-btn"]}>
          <span className={styles["icon-settings"]}>⚙️</span>
        </button>
        <div className={styles.header__profile}>
          <div
            className={styles["header__profile-avatar"]}
            style={{ backgroundImage: "url(/avatars/9.png)" }}
          ></div>
          <span className={styles["header__profile-name"]}>William_Prince</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
