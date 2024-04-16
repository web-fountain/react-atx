'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';

import TextInput from '@Components/TextInput';
import SponsorSelection from '@Components/SponsorSelection';
import Button from '@Components/SubmitButton';

import styles from './styles.module.css';


interface FormDataTypes {
  name: string;
  jobTitle: string;
  email: string;
  company: string;
  venue: boolean;
  food: boolean;
  drinks: boolean;
  speakers: boolean;
  workshops: boolean;
  other: boolean;
}

function Partnerships() {
  const { pending } = useFormStatus();
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
    const { name, value, type, checked } = e.currentTarget;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? !prevData[name] : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('formdata', formData);
  };

  return (
    <section id="partnership" className={styles['layout']}>
      <div>
        <h2>Partnership</h2>
        <h3>Interested in sponsoring?</h3>

        <form className={styles['form']} onSubmit={handleSubmit}>
          <ul className={styles['text-input-list']}>
            <TextInput
              id="name"
              name="name"
              label="Name *"
              placeholder="name..."
              value={formData.name}
              onChange={handleChange}
            />
            <TextInput
              id="email"
              name="email"
              label="Email *"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextInput
              id="jobTitle"
              name="jobTitle"
              label="Job Title"
              placeholder="job title"
              value={formData.jobTitle}
              onChange={handleChange}
            />
            <TextInput
              id="company"
              name="company"
              label="Company"
              placeholder="company"
              value={formData.company}
              onChange={handleChange}
            />
          </ul>

          <h3>How would you like to partner up?</h3>

          <ul className={styles['sponsor-selection-list']}>
            <SponsorSelection
              id="venue"
              name="venue"
              label="Venue"
              icon="venue"
              checked={formData.venue}
              onChange={handleChange}
            />
            <SponsorSelection
              id="food"
              name="food"
              label="Food"
              icon="food"
              checked={formData.food}
              onChange={handleChange}
            />
            <SponsorSelection
              id="drinks"
              name="drinks"
              label="Drinks"
              icon="drinks"
              checked={formData.drinks}
              onChange={handleChange}
            />
            <SponsorSelection
              id="speakers"
              name="speakers"
              label="Speakers"
              icon="speakers"
              checked={formData.speakers}
              onChange={handleChange}
            />
            <SponsorSelection
              id="workshops"
              name="workshops"
              label="Workshops"
              icon="workshops"
              checked={formData.workshops}
              onChange={handleChange}
            />
            <SponsorSelection
              id="other"
              name="other"
              label="Other"
              icon="other"
              checked={formData.other}
              onChange={handleChange}
            />
          </ul>

          <Button formStatus={pending}>
            Submit
          </Button>
            {/* icon='circle-arrow-right' */}
        </form>
      </div>
    </section>
  );
}

export default Partnerships;
