"use client"
import React, { useState } from "react"
import styles from "../Community/community.module.css"

interface Props {
  children: React.ReactNode
  title: string
  content: string
}

export default function CommunityItem({ children, title, content }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <li className={`${styles.item} ${open && styles.open}`}>
      <div>{children}</div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.content}>{content}</p>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={styles.btn}
      >
        Show {open ? "less" : "more"}
      </button>
    </li>
  )
}
