import Icons from '@Icons';
import styles from './styles.module.css';


function Hero() {
  return (
    <section id='hero'>
      <h4>React ATX</h4>
      <h3>Join Austin's React Community</h3>
      <p>We're a community of developers that come together to learn, share, and explore the world of frontend with ReactJS.</p>

      <a className={styles.container} href="#join">
        <div className={styles['text-box']}>
          <span className={styles.text}>Join now
            <Icons name="arrow-up-right" />
          </span>
        </div>
      </a>
    </section>
  );
}


export default Hero;
