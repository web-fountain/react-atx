import Icons from '@Icons';
import styles from './styles.module.css';
import ButtonLink from '@/components/ButtonLink';

function Hero() {
  return (
    <section id='hero' className={styles.layout}>
      <span>React ATX</span>
      <h1>Join Austin's <br></br>React Community</h1>
      <p>We're a community of developers that come together to learn, share, and explore the world of frontend with ReactJS.</p>

      <a className={styles.container} href="#join">
        <div className={styles['text-box']}>
          <span>
            Join now
            <Icons name="arrow-up-right" />
          </span>
        </div>
      </a>
    </section>
  );
}

export default Hero;
