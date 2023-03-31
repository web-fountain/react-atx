'use client';

import React from 'react';

import { ArrowRightIcon } from '@Icons';
import styles from './styles.module.css';


interface SpeakerFormTypes {
  name: string
  jobTitle: string
  email: string
  company: string
  topic: string
  showcase: boolean
  instructional: boolean
  interactive: boolean
  developerPanel: boolean
  lightningTalk: boolean
}

function Speakers() {
  const [speakerForm, setSpeakerForm] = React.useState<SpeakerFormTypes>({
    name: '',
    jobTitle: '',
    email: '',
    company: '',
    topic: '',
    showcase: false,
    instructional: false,
    interactive: false,
    developerPanel: false,
    lightningTalk: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeakerForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section className={styles.container} id="speakers">
      <div className={styles.top}>
        <h2>Speakers</h2>
        <p>Interested in speaking at our next event?</p>
        <p>Please fill out the form below</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.inputBlock}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              id="jobTitle"
              name="jobTitle"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="Company"
              id="company"
              name="company"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              placeholder="Topic"
              id="topic"
              name="topic"
              onChange={handleChange}
            />
          </div>
        </div>
        <h3>How Would you like to present your topic?</h3>
        <small>You can choose only one of the options</small>
        <div className={styles.checks}>
          <div className={styles.checkBlock}>
            <input
              type="checkbox"
              name="showcase"
              id="showcase"
              onChange={handleChange}
            />
            <label htmlFor="showcase">Showcase</label>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </div>
          <div className={styles.checkBlock}>
            <input
              type="checkbox"
              name="instructional"
              id="instructional"
              onChange={handleChange}
            />
            <label htmlFor="instructional">Instructional</label>
            <p>
              Step by step instructions with credible references that link back
              to best practices, using some live code or photos of your code to
              give context.
            </p>
          </div>
          <div className={styles.checkBlock}>
            <input
              type="checkbox"
              name="interactive"
              id="interactive"
              onChange={handleChange}
            />
            <label htmlFor="interactive">Interactive</label>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </div>
          <div className={styles.checkBlock}>
            <input
              type="checkbox"
              name="developerPanel"
              id="developerPanel"
              onChange={handleChange}
            />
            <label htmlFor="developerPanel">Developer Panel</label>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </div>
          <div className={styles.checkBlock}>
            <input
              type="checkbox"
              name="lightningTalk"
              id="lightningTalk"
              onChange={handleChange}
            />
            <label htmlFor="lightningTalk">Lightning Talk</label>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </div>
          <button type="submit" className={styles.btn}>
            <div className={styles.btnInnerBox}>
              <span className={styles.btnText}>
                Submit <ArrowRightIcon className={styles.arrow} />
              </span>
            </div>
          </button>
        </div>
      </form>
    </section>
  );
}


export default Speakers;
