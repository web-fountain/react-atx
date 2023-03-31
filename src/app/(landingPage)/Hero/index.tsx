import styles from './hero.module.css';
import { ArrowRightIcon, ReactLargeLogo } from '../../../components/Icons';


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <h1>React ATX</h1>
        <h2>
          Join Austin&apos;s
          <br />
          React Community
        </h2>
        <p>
          We&apos;re a community of developers that come together to learn,
          share, and explore the world of frontend with ReactJS.
        </p>
        <button type="button" className={styles.signInBtn}>
          <div className={styles.signInBtnInnerBox}>
            <span className={styles.signInBtnText}>
              Join now
              <ArrowRightIcon className={styles.arrow} />
            </span>
          </div>
        </button>
      </div>
      <ReactLargeLogo />
    </section>
  );
}
