import Image from 'next/image';

import { hostImg } from '@Images';
import styles from './styles.module.css';


function AboutUs() {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <h2>About Us</h2>
        <p>
          There are some React meetups but don&apos;t seem to be consistently
          active. We plan on doing montly presentations, hacking, and every once
          in a while workshop. We want this meetup to be the place where you can
          learn, teach and show off your latest project. We want to encourage
          curiosity, creativity, and share knowledge on building the Web.
        </p>
        <p>
          We are not only focusing on React perse but the whole ecosystem that
          React touches: Webpack, ES6, Babel, Redux, Flux, J5X, React Native,
          Docker, nginx, NodeJS, NextJS, HTTP/2, bundling etc.
        </p>
        <p>
          All skills sets are welcomed. Anyone with a desire to learn React,
          have questions about developing React, deploying top production,
          general JavaScript questions, setting up Webpack or whatever are
          welcome. If you want to make a presentation (short: 15 min / long: 30
          min) get in contact! Bring a Laptop, and remember, be NICE!
        </p>
      </div>
      <ul className={styles.hostList}>
        <li>
          <div className={styles.imgWrapper}>
            <Image src={hostImg} alt="host" />
          </div>
          <h4 className={styles.position}>
            Position: <span>HOST</span>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio in sit culpa consequatur ratione, rem veritatis debitis
            saepe sunt.
          </p>
        </li>
        <li>
          <div className={styles.imgWrapper}>
            <Image src={hostImg} alt="host" />
          </div>
          <h4 className={styles.position}>
            Position: <span>HOST</span>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio in sit culpa consequatur ratione, rem veritatis debitis
            saepe sunt.
          </p>
        </li>
        <li>
          <div className={styles.imgWrapper}>
            <Image src={hostImg} alt="host" />
          </div>
          <h4 className={styles.position}>
            Position: <span>HOST</span>
          </h4>
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
