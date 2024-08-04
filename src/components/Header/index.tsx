import Link from 'next/link';

import ThemeToggle from './ThemeToggle';
import styles from './styles.module.css';


function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <Link href='/'>
          <svg className={`${styles['logo']}`}>
            <use href={`sprites/landingPage.svg#react-logo`} />
          </svg>
        </Link>

        <nav aria-label='main'>
          <ul className={styles['nav-list']}>
            <li>
              <Link href='/events'>Events</Link>
            </li>
            <li>
              <Link href='/news'>News</Link>
            </li>
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}


export default Header;
