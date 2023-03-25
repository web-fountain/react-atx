'use client';
import { useState } from 'react';
import {
  VenueIcon,
  FoodIcon,
  DrinksIcon,
  SpeakersIcon,
  WorkshopsIcon,
  OtherIcon,
  ArrowRightIcon
} from '../Icons';
import styles from './partnerships.module.css';


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

export default function Partnerships() {
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <section className={styles.container} id="partnership">
      <h2>Partnership</h2>
      <h3>Interested in sponsoring?</h3>
      <form onSubmit={handleSubmit}>
        <ul className={styles.inputs}>
          <li className={styles.inputBlock}>
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
          <li className={styles.inputBlock}>
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
          <li className={styles.inputBlock}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@mail.com"
              onChange={handleChange}
              value={formData.email}
            />
          </li>
          <li className={styles.inputBlock}>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="company"
              onChange={handleChange}
              value={formData.company}
            />
          </li>
        </ul>
        <p className={styles.question}>How would you like to partner up?</p>
        <ul className={styles.checkboxes}>
          <li className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="venue"
              name="venue"
              onChange={handleChange}
              checked={formData.venue}
            />
            <label htmlFor="venue" className={styles.checkboxLabel}>
              <VenueIcon />
              Venue
            </label>
          </li>
          <li className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="food"
              name="food"
              onChange={handleChange}
              checked={formData.food}
            />
            <label htmlFor="food" className={styles.checkboxLabel}>
              <FoodIcon />
              Food
            </label>
          </li>
          <li className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="drinks"
              name="drinks"
              onChange={handleChange}
              checked={formData.drinks}
            />
            <label htmlFor="drinks" className={styles.checkboxLabel}>
              <DrinksIcon />
              Drinks
            </label>
          </li>
          <li className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="speakers"
              name="speakers"
              onChange={handleChange}
              checked={formData.speakers}
            />
            <label htmlFor="speakers" className={styles.checkboxLabel}>
              <SpeakersIcon />
              Speakers
            </label>
          </li>
          <li className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="workshops"
              name="workshops"
              onChange={handleChange}
              checked={formData.workshops}
            />
            <label htmlFor="workshops" className={styles.checkboxLabel}>
              <WorkshopsIcon />
              Workshops
            </label>
          </li>
          <li className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="other"
              name="other"
              onChange={handleChange}
              checked={formData.other}
            />
            <label htmlFor="other" className={styles.checkboxLabel}>
              <OtherIcon />
              Other
            </label>
          </li>
        </ul>
        <button type="submit" className={styles.submitBtn}>
          <div className={styles.submitBtnInnerBox}>
            <span className={styles.submitBtnText}>
              Submit
              <ArrowRightIcon className={styles.arrow} />
            </span>
          </div>
        </button>
      </form>
    </section>
  );
}
