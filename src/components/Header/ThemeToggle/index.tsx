'use client';

import { useEffect } from 'react';

import Icons from '@Icons';
import styles from './styles.module.css';


function ThemeToggle() {
  useEffect(() => {
    const rootTag = document.documentElement;
    const theme = localStorage.getItem('theme');

    function setTheme(theme: string) {
      rootTag.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;

    if (theme === 'dark') {
      setTheme('dark');
      if (!themeToggle.checked) {
        themeToggle.click();
      }
    } else {
      setTheme('light');
    }

    function handleCheck(event: MouseEvent) {
      let isChecked = (event.target as HTMLInputElement).checked;
      isChecked ? setTheme('dark') : setTheme('light');
    }

    themeToggle.addEventListener('click', handleCheck);

    return () => themeToggle.removeEventListener('click', handleCheck);
  }, []);

  // function setTheme(theme: string = 'light') {
  //   const rootTag = document.documentElement;
  //   rootTag.setAttribute('data-theme', theme);
  //   localStorage.setItem('theme', theme);
  // }

  // useEffect(() => {
  //   const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;

  //   // set theme listener on toggle
  //   themeToggle.addEventListener('input', event => {
  //     //@ts-ignore
  //     const isChecked =  event.target.checked;

  //     isChecked
  //       ? setTheme('light')
  //       : setTheme('dark');
  //   });

  //   // check localstorage if theme is set (default: dark)
  //   const theme = localStorage.getItem('theme');
  //   if (!theme) setTheme();
  //   if (theme === 'light') themeToggle.click();
  // }, []);

  return (
    <div className={styles['theme-toggle']}>
      <input type="checkbox" id="theme-toggle" />
      <label htmlFor="theme-toggle">
        <Icons name="sun" className="sun" />
        <Icons name="moon" className="moon" />
      </label>
    </div>
  );
}

export default ThemeToggle;
