import Image from 'next/image';
import ButtonLink from '@Components/ButtonLink';
import styles from './styles.module.css';


function Hero() {
  return (
    <section id='hero' className={styles['layout']}>
      <div className={styles['content']}>

        <div className={styles['intro']}>
          <span>React ATX</span>
          <h1>Join Austin's <br/>React Community</h1>
          <p>We're a community of developers that come together to learn, share, and explore the world of frontend with React</p>
        </div>

        <ButtonLink
          text="Join Now"
          href="#join"
          icon="arrow-up-right"
        />

      </div>

      <Image
        className={styles['hero-image']}
        src="/images/react-3d.png"
        alt='React Logo'
        width={474}
        height={604}
      />
    </section>
  );
}


export default Hero;
