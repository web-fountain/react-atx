import React from "react"
import styles from "./footer.module.css"
import { FaTwitter, FaGitlab } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialMedia}>
          <FaTwitter size={24} />
          <FaGitlab size={24} />
        </div>
        <div className={styles.policy}>
          <Link href="/">Privacy Notice</Link>
          <Link href="/">Cookie Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
        <p className={styles.rights}>
          ReactJS ATX &copy; {footerYear}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
