"use client";

import React from "react";
import styles from "./Header.module.scss";
import NotificationModal from "./NotificationModal/NotificationModal";
import SettingModal from "./SettingModal/SettingModal";
import ProfileModal from "./ProfileModal/ProfileModal";
import { useUserStore } from "@/store/userStore";

const Header: React.FC = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] =
    React.useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = React.useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false);

  const currentUser = useUserStore((state) =>state.currentUser)

  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
    console.log("Profile modal opened");
  };

  const handleBellClick = () => {
    setIsNotificationModalOpen(true);
    console.log("Notification modal opened");
  };

  const handleSettingsClick = () => {
    setIsSettingModalOpen(true);
    console.log("Settings modal opened");
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

        <div className={styles.header__notification_wrapper}>
          <button
            className={styles["header__icon-btn"]}
            onClick={handleSettingsClick}
          >
            <span className={styles["icon-settings"]}>⚙️</span>
          </button>
          {isSettingModalOpen && (
            <SettingModal
              isOpen={isSettingModalOpen}
              onClose={() => setIsSettingModalOpen(false)}
            />
          )}
        </div>

        <div className={styles.header__notification_wrapper}>
          <button className={styles.header__profile} onClick={handleProfileClick}>
            <div
              className={styles["header__profile-avatar"]}
              style={{ backgroundImage: `url(${currentUser?.avatarUrl})` }}
            ></div>
            <span className={styles["header__profile-name"]}>
              {currentUser?.username}
            </span>
          </button>
          {isProfileModalOpen && (
            <ProfileModal
              isOpen={isProfileModalOpen}
              onClose={() => setIsProfileModalOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
