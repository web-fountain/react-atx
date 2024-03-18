import Link from 'next/link';

import Icon from '@Icons';
import ThemeToggle from './ThemeToggle';
import styles from './styles.module.css';


function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <Link href='/'>
          <Icon className={styles['logo']} name="react-logo" />
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
