"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import styles from "./header.module.css"
import MobileNavBtn from "../MobileNavBtn"
import { headerImgDark, headerImgLight } from "../../assets/images"
import ThemeToggle from "../ThemeToggle"
import { ReactLogoSmall, ArrowRightIcon } from "../Icons"

export default function Header() {
  const [showNav, setShowNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <header className={styles.header}>
      <Image
        src={darkMode ? headerImgDark : headerImgLight}
        alt="header image"
        fill={true}
        priority={true}
      />
      <div className={styles.container}>
        <div>
          <Link href="/">
            <ReactLogoSmall className={styles.logo} />
          </Link>
        </div>
        <nav className={styles.mainNav}>
          <ul className={`${styles.navList} ${showNav && styles.open}`}>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/" className={styles.signInLink}>
                Sign In <ArrowRightIcon />
              </Link>
            </li>
          </ul>
          <MobileNavBtn setShowNav={setShowNav} showNav={showNav} />
        </nav>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  )
}
