'use client';

import JoinForm from './form';
import styles from './styles.module.css';


function Join() {
  return (
    <section id="join" className={styles['container']}>
      <div className={styles['top-lid']}></div>
      <div className={styles['content']}>
        <h2>
          Join the
          <br />
          Community
        </h2>

        <JoinForm />
      </div>
    </section>
  );
}

export default Join;
