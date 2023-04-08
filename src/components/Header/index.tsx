'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import Icons from '@Icons';
import styles from './styles.module.css';


function setTheme(theme: 'dark' | 'light') {
  const rootTag = document.documentElement;
  rootTag.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme)
};

function Header() {
  useEffect(() => {
    const themeToggle = document.getElementById('theme-toggle') as HTMLElement;
    const rootTag = document.documentElement;

    // check localstorage if theme is set (default: dark)
    const theme = localStorage.getItem('theme');
    if (theme) {
      rootTag.setAttribute('data-theme', theme);
    } else {
      localStorage.setItem('theme', 'dark');
    }

    // set theme listener
    themeToggle.addEventListener('input', event => {
      //@ts-ignore
      const isChecked =  event.target.checked;

      isChecked
        ? setTheme('light')
        : setTheme('dark');
    });
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles['background-image']}>
        <div className={styles.container}>
          <Link href="/">
            <Icons className={styles.logo} name="react-logo" />
          </Link>

          <nav aria-label="Main">
            <ul className={styles.nav}>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
            </ul>
          </nav>

          <div className={styles['theme-toggle']}>
            <input type="checkbox" id="theme-toggle" />
            <label htmlFor="theme-toggle">
              <Icons name="sun" className='sun'/>
              <Icons name="moon" className='moon'/>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
