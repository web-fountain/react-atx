import Link from 'next/link';

import Icons from '@Icons';
import styles from './styles.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.rights}>
          React ATX &copy; 2023 / All Rights Reserved
        </span>

        <div className={styles.socialMedia}>
          <Icons name='twitter' />
          <Icons name='linkedIn' />
          <Icons name='github' />
        </div>

        <div className={styles.policy}>
          <Link href='/'>Privacy Notice</Link>
          <Link href='/'>Terms of Service</Link>
          <Link href='/'>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
