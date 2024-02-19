'use client';

import JoinForm from './form';
import styles from './styles.module.css';


function Join() {
  return (
    <section id='join' className={styles['section']}>
      <div className={styles['top-lid']}></div>
      <div className={styles['content']}>
        <h1>Join the<br />Community</h1>

        <JoinForm />

      </div>
    </section>
  );
}


export default Join;
