'use client';

import React from 'react';

import Icons from '@Icons';
import styles from './styles.module.css';


function Join() {
  const [joinInput, setJoinInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (joinInput.trim() !== '') {
      setJoinInput('');
    }
  };

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.top} />
        <div className={styles.main}>
          <Icons name='react-logo-medium' className={styles.reactCornerSvg} />
          <div>
            <h2>Join the Community</h2>
            <p>Subscribe to monthly meetup events.</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              placeholder="example@mail.com"
              value={joinInput}
              onChange={(e) => setJoinInput(e.target.value)}
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe <Icons name='arrow-right' className={styles.arrow} />
            </button>
          </form>
        </div>
        <div className={styles.bottom} />
        <div className={styles.reactQuestions}>
          <div className={styles.bulb}>
            <Icons name='lightbulb' />
          </div>
          <div className={styles.text}>
            <p>
              Have ReactJS questions? Seeking resources? Want to help others?
              Join our Slack group!
            </p>
          </div>
          <div className={styles.slackLink}>
            <a
              href="https://slack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Slack
            </a>
            <Icons name='discord-white' />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Join;
