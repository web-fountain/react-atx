'use client';

import React from 'react';

import Icons from '@Icons';
import styles from './styles.module.css';


interface SpeakerFormTypes {
  name: string
  'job-title': string
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
  const [formData, setFormData] = React.useState<SpeakerFormTypes>({
    name: '',
    'job-title': '',
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
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section className={styles.container} id="speakers">
      <h1>Speakers</h1>
      <h4>Interested in speaking at our next event? Please fill out the form below</h4>

      <form className={styles['speaker-form']} onSubmit={handleSubmit}>
        <ul className={styles['list-info']}>
          <li className={styles['list-info-item']}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={formData.name}
            />
          </li>
          <li className={styles['list-info-item']}>
            <label htmlFor="job-title">Job Title</label>
            <input
              type="text"
              id="job-title"
              name="job-title"
              placeholder="software engineer"
              onChange={handleChange}
              value={formData['job-title']}
            />
          </li>
          <li className={styles['list-info-item']}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@acme.com"
              onChange={handleChange}
              value={formData.email}
            />
          </li>
          <li className={styles['list-info-item']}>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Acme Corp."
              onChange={handleChange}
              value={formData.company}
            />
          </li>
          <li className={styles['list-info-item']}>
            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              id="topic"
              name="topic"
              placeholder="Intro to React"
              onChange={handleChange}
              value={formData.topic}
            />
          </li>
        </ul>

        <h4 className={styles['topic-presentation']}>How Would you like to present your topic?</h4>

        <div className={styles.hint}>
          <div>
            <Icons name='circle-exclamation' />
          </div>
          <p>You can choose only one of the options</p>
        </div>

        <ul className={styles.checks}>
          <li className={styles.checkBlock}>
            <div>
              <input
                type="checkbox"
                name="showcase"
                id="showcase"
                onChange={handleChange}
              />
              <h4><label htmlFor="showcase">Showcase</label></h4>
            </div>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </li>
          <li className={styles.checkBlock}>
            <div>
              <input
                type="checkbox"
                name="instructional"
                id="instructional"
                onChange={handleChange}
              />
              <h4><label htmlFor="instructional">Instructional</label></h4>
            </div>
            <p>
              Step by step instructions with credible references that link back
              to best practices, using some live code or photos of your code to
              give context.
            </p>
          </li>
          <li className={styles.checkBlock}>
            <div>
              <input
                type="checkbox"
                name="interactive"
                id="interactive"
                onChange={handleChange}
              />
              <h4><label htmlFor="interactive">Interactive</label></h4>
            </div>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </li>
          <li className={styles.checkBlock}>
            <div>
              <input
                type="checkbox"
                name="developerPanel"
                id="developerPanel"
                onChange={handleChange}
              />
              <h4><label htmlFor="developerPanel">Developer Panel</label></h4>
            </div>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </li>
          <li className={styles.checkBlock}>
            <div>
              <input
                type="checkbox"
                name="lightningTalk"
                id="lightningTalk"
                onChange={handleChange}
              />
              <h4><label htmlFor="lightningTalk">Lightning Talk</label></h4>
            </div>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </li>
          <button type="submit">
            <div className={styles['text-box']}>
              <span>
                Submit
                <Icons name='circle-arrow-right' />
              </span>
            </div>
          </button>
        </ul>
      </form>
    </section>
  );
}


export default Speakers;
