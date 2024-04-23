'use client';

import JoinForm from './form';
import styles from './styles.module.css';


function Join() {
  return (
    <section id='join' className={styles['layout']}>
      <div className={styles['box-lid']} />

      <JoinForm />

    </section>
  );
}



export default Join;
