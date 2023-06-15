'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

import styles from './layout.module.css';


function NewsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const btmBorderGradient:Record<string, string> = {
    '/news': 'left-linear',
    '/news/javascript': 'radial',
    '/news/css': 'right-linear'
  };

  return (
    <main className={`main-layout ${styles['page-layout']}`}>
      <h1>News</h1>

      <header>
        <nav>
          <ul className={`${styles['topic-list']} ${styles[btmBorderGradient[pathname]]}`}>
            <li className={`${styles['topic']} ${pathname == "/news" ? `${styles.active}` : ""}`}>
              <Link href="/news">React</Link>
            </li>
            <li className={`${styles['topic']} ${pathname == "/news/javascript" ? `${styles.active}` : ""}`}>
              <Link href="/news/javascript">JavaScript</Link>
            </li>
            <li className={`${styles['topic']} ${pathname == "/news/css" ? `${styles.active}` : ""}`}>
              <Link href="/news/css">CSS</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  );
}


export default NewsLayout;
