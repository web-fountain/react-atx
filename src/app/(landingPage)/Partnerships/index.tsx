'use client';

import { useState } from 'react';

import Icons from '@Icons';
import styles from './styles.module.css';


interface FormDataTypes {
  name: string
  jobTitle: string
  email: string
  company: string
  venue: boolean
  food: boolean
  drinks: boolean
  speakers: boolean
  workshops: boolean
  other: boolean
}

function Partnerships() {
  const [formData, setFormData] = useState<FormDataTypes>({
    name: '',
    jobTitle: '',
    email: '',
    company: '',
    venue: false,
    food: false,
    drinks: false,
    speakers: false,
    workshops: false,
    other: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section id="partnership" className={styles.container}>
      <h2>Partnership</h2>
      <h3>Interested in sponsoring?</h3>

      <form className={styles['partnership-form']} onSubmit={handleSubmit}>
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
              value={formData.jobTitle}
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
        </ul>

        <p className={styles['partner-up']}>How would you like to partner up?</p>
        <ul className={styles['list-options']}>
          <li className={styles['list-option-item']}>
            <input
              type="checkbox"
              id="venue"
              name="venue"
              onChange={handleChange}
              checked={formData.venue}
            />
            <label htmlFor="venue">
              <Icons name='venue' />
              Venue
            </label>
          </li>
          <li className={styles['list-option-item']}>
            <input
              type="checkbox"
              id="food"
              name="food"
              onChange={handleChange}
              checked={formData.food}
            />
            <label htmlFor="food">
              <Icons name='food' />
              Food
            </label>
          </li>
          <li className={styles['list-option-item']}>
            <input
              type="checkbox"
              id="drinks"
              name="drinks"
              onChange={handleChange}
              checked={formData.drinks}
            />
            <label htmlFor="drinks">
              <Icons name='drinks' />
              Drinks
            </label>
          </li>
          <li className={styles['list-option-item']}>
            <input
              type="checkbox"
              id="speakers"
              name="speakers"
              onChange={handleChange}
              checked={formData.speakers}
            />
            <label htmlFor="speakers">
              <Icons name='speakers' />
              Speakers
            </label>
          </li>
          <li className={styles['list-option-item']}>
            <input
              type="checkbox"
              id="workshops"
              name="workshops"
              onChange={handleChange}
              checked={formData.workshops}
            />
            <label htmlFor="workshops">
              <Icons name='workshops' />
              Workshops
            </label>
          </li>
          <li className={styles['list-option-item']}>
            <input
              type="checkbox"
              id="other"
              name="other"
              onChange={handleChange}
              checked={formData.other}
            />
            <label htmlFor="other">
              <Icons name='other' />
              Other
            </label>
          </li>
        </ul>

        <button type="submit">
          <div className={styles['text-box']}>
            <span>
              Submit
              <Icons name='circle-arrow-right' />
            </span>
          </div>
        </button>
      </form>
    </section>
  );
}


export default Partnerships;
