import styles from './styles.module.css';
import ButtonLink from '@Components/ButtonLink';
import { Icons } from '@/components';


function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.content}>
        <span>React ATX</span>
        <h1>
          Join Austin's <br></br>React Community
        </h1>
        <p>
          We're a community of developers that come together to learn, share, and explore the world of frontend with
          ReactJS.
        </p>
        <p>Test change</p>
        <ButtonLink href='#join'>Join Now!</ButtonLink>
      </div>
      <div className={styles['hero-icon']}>
        <Icons name='react-logo-large' />
      </div>
    </section>
  );
}

export default Hero;
