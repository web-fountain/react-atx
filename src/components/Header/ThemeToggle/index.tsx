'use client';

import { useEffect } from 'react';

import Icon from '@Icons';
import styles from './styles.module.css';


function setTheme(theme: string) {
  const rootTag = document.documentElement;
  rootTag.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

function ThemeToggle() {
  useEffect(() => {
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;

    // set theme listener on toggle
    themeToggle.addEventListener('change', event => {
      const isChecked =  event.target.checked;

      isChecked
        ? setTheme('light')
        : setTheme('dark');
    });

    // check localstorage if theme is set (default: dark)
    const theme = localStorage.getItem('theme');
    if (!theme) setTheme('dark');
    if (theme === 'light') themeToggle.click();
  }, []);

  return (
    <div className={styles['theme-toggle']}>
      <input id="theme-toggle" type="checkbox"  />
      <label htmlFor="theme-toggle">
        <Icon name="sun" className='sun'/>
        <Icon name="moon" className='moon'/>
      </label>
    </div>
  );
}


export default ThemeToggle;
