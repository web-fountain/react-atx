import Image from 'next/image';
import styles from './styles.module.css';


function AboutUs() {
  return (
    <div id="about-us" className={styles['container']}>
      <section className={styles['content']}>
        <h2>About Us</h2>
        <p>
          There are some React meetups but don&apos;t seem to be consistently active. We plan on doing montly
          presentations, hacking, and every once in a while workshop. We want this meetup to be the place where you can
          learn, teach and show off your latest project. We want to encourage curiosity, creativity, and share knowledge
          on building the Web.
          <br />
          <br />
          We are not only focusing on React perse but the whole ecosystem that React touches: Webpack, ES6, Babel,
          Redux, Flux, J5X, React Native, Docker, nginx, NodeJS, NextJS, HTTP/2, bundling etc.
          <br />
          <br />
          All skills sets are welcomed. Anyone with a desire to learn React, have questions about developing React,
          deploying top production, general JavaScript questions, setting up Webpack or whatever are welcome. If you
          want to make a presentation (short: 15 min / long: 30 min) get in contact! Bring a Laptop, and remember, be
          NICE!
        </p>
      </section>
      <section>
        <ul className={styles['host-list']}>
          <li className={styles['host']}>
            <Image alt="host" src="" className={styles['host-image']} />
            <h4 className={styles['position']}>
              Position: <span>Software Engineer</span>
            </h4>
            <p className={styles['host-intro']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero distinctio in sit culpa consequatur
              ratione, rem veritatis debitis saepe sunt.
            </p>
          </li>
          <li className={styles['host']}>
            <Image alt="host" src="" className={styles['host-image']} />
            <h4 className={styles['position']}>
              Position: <span>Software Engineer</span>
            </h4>
            <p className={styles['host-intro']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero distinctio in sit culpa consequatur
              ratione, rem veritatis debitis saepe sunt.
            </p>
          </li>
          <li className={styles['host']}>
            <Image alt="host" src="" className={styles['host-image']} />
            <h4 className={styles['position']}>
              Position: <span>Software Engineer</span>
            </h4>
            <p className={styles['host-intro']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero distinctio in sit culpa consequatur
              ratione, rem veritatis debitis saepe sunt.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
