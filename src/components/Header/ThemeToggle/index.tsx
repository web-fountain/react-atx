'use client';

import { useEffect } from 'react';

import Icon from '@Icons';
import styles from './styles.module.css';


function setTheme(theme: string='dark') {
  const rootTag = document.documentElement;
  rootTag.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

function ThemeToggle() {
  useEffect(() => {
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;

    // set theme listener on toggle
    themeToggle.addEventListener('input', event => {
      //@ts-ignore
      const isChecked =  event.target.checked;

      isChecked
        ? setTheme('light')
        : setTheme('dark');
    });

    // check localstorage if theme is set (default: dark)
    const theme = localStorage.getItem('theme');
    if (!theme) setTheme();
    if (theme === 'light') themeToggle.click();
  }, []);

  return (
    <div className={styles['theme-toggle']}>
      <input type="checkbox" id="theme-toggle" />
      <label htmlFor="theme-toggle">
        <Icon name="sun" className='sun'/>
        <Icon name="moon" className='moon'/>
      </label>
    </div>
  );
}


export default ThemeToggle;
