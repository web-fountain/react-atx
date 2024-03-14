import styles from './styles.module.css';
import ButtonLink from '@Components/ButtonLink';
import { Icons } from '@/components';


function Hero() {
  return (
    <div id="hero" className={styles['container']}>
      <section className={styles['content']}>
        <span>React ATX</span>
        <h2>
          Join Austin's <br></br>React Community
        </h2>
        <p>
          We're a community of developers that come together to learn, share, and explore the world of frontend with
          ReactJS.
        </p>
        <ButtonLink href="#join">Join Now!</ButtonLink>
      </section>
      <section className={styles['hero-icon']}>
        <Icons name="react-logo-large" />
      </section>
    </div>
  );
}

export default Hero;
