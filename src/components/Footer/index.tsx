import Link from 'next/link';

import Icon from '@Icons';
import styles from './styles.module.css';


function Footer() {
  return (
    <footer className={styles['layout']}>
        <span className={styles['rights']}>
          Web Fountain, Inc &copy; 2024 / All Rights Reserved
        </span>

        <div className={styles['social-media']}>
          <Icon name="twitter" className={styles['icon-twitter']} />
          <Icon name="github" className={styles['icon-github']} />
        </div>

        <div className={styles['policy']}>
          <Link href="/">Privacy Notice</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Cookie Policy</Link>
        </div>
    </footer>
  );
}

export default Footer;
