import Link from 'next/link';

import Icons from '@Icons';
import ThemeToggle from './ThemeToggle';
import styles from './styles.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['background-image']}>
        <div className={styles.container}>
          <Link href="/">
            <Icons className={styles.logo} name="react-logo" />
          </Link>

          <nav aria-label="main">
            <ul className={styles['nav-list']}>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
            </ul>
          </nav>

        <ThemeToggle />
        </div>
      </div>
    </header>
  );
}


export default Header;
