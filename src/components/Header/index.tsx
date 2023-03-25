'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './header.module.css';
import { headerImgDark, headerImgLight } from '../../assets/images';
import { ArrowRightIcon, ReactSmallLogo } from '../Icons';
import MobileNavBtn from '../MobileNavBtn';


export default function Header() {
  const [showNav, setShowNav] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
    }
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }
  return (
    <header className={`${styles.header} ${showNav && styles.mobileHeader}`}>
      {/* Header background Image */}
      <div className={styles.imgContainer}>
        <Image
          src={darkMode ? headerImgDark : headerImgLight}
          alt="header image"
          priority={true}
        />
        {/* </div> */}
        {/* Header container */}
        <div className={styles.container}>
          {/* Header Logo */}
          <Link href="/" onClick={() => setShowNav(false)}>
            <ReactSmallLogo className={styles.logo} />
          </Link>
          {/* Main Navigation */}
          <nav className={styles.mainNav}>
            <ul className={`${styles.navList} ${showNav && styles.open}`}>
              <li>
                <Link href="/events" onClick={() => setShowNav(false)}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={() => setShowNav(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/news" onClick={() => setShowNav(false)}>
                  News
                </Link>
              </li>
              <li>
                <Link href="/jobs" onClick={() => setShowNav(false)}>
                  Jobs
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Nav Button */}
          <MobileNavBtn setShowNav={setShowNav} showNav={showNav} />
          {/* Theme Toggle Button */}
          <button
            type="button"
            className={`${styles.toggleBtn} ${darkMode && styles.toggle}`}
            onClick={toggleTheme}
          >
            <span className={styles.ball} />
          </button>
          {/* Sign In Header Button */}
          <button type="button" className={styles.signInBtn}>
            <div className={styles.signInBtnInnerBox}>
              <span className={styles.signInBtnText}>
                Sign in
                <ArrowRightIcon className={styles.arrow} />
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
