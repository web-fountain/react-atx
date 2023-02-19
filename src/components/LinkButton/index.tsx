import React from "react"
import { ArrowRightIcon } from "../Icons"
import styles from "./linkButton.module.css"

interface Props {
  href: string
  text: string
}

export default function LinkButton({ href, text }: Props) {
  return (
    <a href={href} className={styles.linkButton}>
      <span className={styles.text}>
        {text} <ArrowRightIcon className={styles.arrow} />
      </span>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        preserveAspectRatio="none"
        className={styles.svgWrapper}
        strokeWidth={14}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="10" y1="0" x2="100" y2="0" strokeWidth="8" />
          <line x1="100" y1="0" x2="100" y2="70" strokeWidth="4" />
          <line x1="100" y1="70" x2="90" y2="100" strokeWidth="4" />
          <line x1="90" y1="100" x2="0" y2="100" strokeWidth="8" />
          <line x1="0" y1="100" x2="0" y2="20" strokeWidth="4" />
          <line x1="0" y1="30" x2="10" y2="0" strokeWidth="4" />
        </svg>
      </svg>
    </a>
  )
}
