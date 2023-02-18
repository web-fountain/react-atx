import React from "react"
import styles from "./themeToggle.module.css"

interface Props {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ThemeToggle({ darkMode, setDarkMode }: Props) {
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark")
      localStorage.setItem("data-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("data-theme", "light")
    }
  }, [darkMode])

  function toggleTheme() {
    setDarkMode((prev) => !prev)
  }

  return (
    <button
      className={`${styles.toggleBtn} ${darkMode && styles.toggle}`}
      onClick={toggleTheme}
    >
      <span className={styles.ball} />
    </button>
  )
}
