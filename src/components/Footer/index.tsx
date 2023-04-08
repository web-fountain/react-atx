import Link from 'next/link';

// import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon } from '@Icons';
import styles from './styles.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialMedia}>
          {/* <TwitterIcon />
          <LinkedInIcon />
          <GitHubIcon /> */}
        </div>
        <div className={styles.policy}>
          <Link href="/">Privacy Notice</Link>
          <Link href="/">Cookie Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
        <p className={styles.rights}>
          ReactJS ATX &copy; 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}


export default Footer;
