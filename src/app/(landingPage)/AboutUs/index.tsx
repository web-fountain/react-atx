'use server';

import styles from './styles.module.css';


async function AboutUs() {
  return (
    <section id='aboutus' className={styles['layout']}>
        <h1>About Us</h1>
        <p>
          There are some React meetups but don&apos;t seem to be consistently
          active. We plan on doing montly presentations, hacking, and every once
          in a while workshop. We want this meetup to be the place where you can
          learn, teach and show off your latest project. We want to encourage
          curiosity, creativity, and share knowledge on building the Web.
        <br />
        <br />
          We are not only focusing on React perse but the whole ecosystem that
          React touches: Webpack, ES6, Babel, Redux, Flux, J5X, React Native,
          Docker, nginx, NodeJS, NextJS, HTTP/2, bundling etc.
        <br />
        <br />
          All skills sets are welcomed. Anyone with a desire to learn React,
          have questions about developing React, deploying top production,
          general JavaScript questions, setting up Webpack or whatever are
          welcome. If you want to make a presentation (short: 15 min / long: 30
          min) get in contact! Bring a Laptop, and remember, be NICE!
        </p>

      <ul className={styles['host-list']}>
        <li>
          <div className={styles['background-image']}>
          </div>
          <h3 className={styles.position}>
            Han Solo
          </h3>
          <span className={styles['border-line']} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio in sit culpa consequatur ratione, rem veritatis debitis
            saepe sunt.
          </p>
        </li>
        <li>
          <div className={styles['background-image']}>
          </div>
          <h3 className={styles.position}>
            Landonis Balthazar "Lando" Calrissian III
          </h3>
          <span className={styles['border-line']} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio in sit culpa consequatur ratione, rem veritatis debitis
            saepe sunt.
          </p>
        </li>
        <li>
          <div className={styles['background-image']}>
          </div>
          <h3 className={styles.position}>
            Chewbacca
          </h3>
          <span className={styles['border-line']} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio in sit culpa consequatur ratione, rem veritatis debitis
            saepe sunt.
          </p>
        </li>
      </ul>
    </section>
  );
}


export default AboutUs;
