'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  function handleTheme() {
    if (theme === 'dark') {
      setTheme(null);
      localStorage.removeItem('theme');
      document.documentElement.removeAttribute('data-theme');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
      setTheme(currentTheme);
      root.setAttribute('data-theme', 'dark');
    } else {
      setTheme(null);
      root.removeAttribute('data-theme');
    }
  }, []);

  return (
    <button
      type='button'
      className='hidden lg:block h-8 w-16 rounded-2xl bg-primary-color relative'
      onClick={handleTheme}
    >
      <span
        className={`bg-white h-8 w-8 block border-2 border-primary-color rounded-2xl absolute top-0 left-0 transition-transform ${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></span>
    </button>
  );
}
