import Icons from '@Icons';
import styles from './styles.module.css';
import ButtonLink from '@/components/ButtonLink';


function Hero() {
  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.intro}>

      <h4>React ATX</h4>
      <h3>Join Austin's <br></br>React Community</h3>
      <p>We're a community of developers that come together to learn, share, and explore the world of frontend with ReactJS.</p>

      <ButtonLink
          element='anchor'
          path='#join'
          height={64}
          width={260}
          icon='arrow-up-right'
          text='Join now'
        />
      </div>
      <Icons name='react-logo-large' />
    </section>
  );
}

export default Hero;
