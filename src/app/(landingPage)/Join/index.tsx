'use client';

import JoinForm from './form';
import styles from './styles.module.css';


function Join() {
  return (
    <section id='join' className={styles['layout']}>
      <div className={styles['box-lid']}></div>
      <div className={styles['content']}>
        <h1>Join the<br />Community</h1>
        <p>Subscribe to our newsletter and get notified of upcoming events</p>

        <JoinForm />

      </div>
    </section>
  );
}


export default Join;
