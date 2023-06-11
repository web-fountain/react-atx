'use client';

import React from 'react';

import Icons from '@Icons';
import styles from './styles.module.css';


function Join() {
  const [email, setEmail] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ email });
  };

  return (
    <section id='join' className={styles.container}>
      <div>
        <div className={styles.top} />
        <div className={styles.main}>
          <div>
            <h1>Join the Community</h1>
            <p>Subscribe to our newsletter and get notified of upcoming events</p>
          </div>
          <form className={styles['join-form']} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              Subscribe
              <Icons name='arrow-right' />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


export default Join;
