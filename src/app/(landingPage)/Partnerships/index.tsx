'use client';

import { useState } from 'react';

import styles from './styles.module.css';
import ButtonLink from '@/components/ButtonLink';
import PartnershipInput from '@/components/PartnershipInput';


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

    <section id='partnership' className={styles.container}>
      <h2>Partnership</h2>
      <h3>Interested in sponsoring?</h3>

      <form className={styles['partnership-form']} onSubmit={handleSubmit}>
        <ul className={styles['list-info']}>
          <PartnershipInput
            type='text'
            label='Name'
            name='name'
            id='name'
            placeholder='name...'
            onChange={handleChange}
            value={formData.name}
          />
          <PartnershipInput
            type='text'
            label='Job Title'
            name='jobTitle'
            id='jobTitle'
            placeholder='job title'
            onChange={handleChange}
            value={formData.jobTitle}
          />
          <PartnershipInput
            type='text'
            label='Email'
            name='email'
            id='email'
            placeholder='email'
            onChange={handleChange}
            value={formData.email}
          />
          <PartnershipInput
            type='text'
            label='Company'
            name='company'
            id='company'
            placeholder='company'
            onChange={handleChange}
            value={formData.company}
          />
        </ul>

        <p className={styles['partner-up']}>
          How would you like to partner up?
        </p>

        <ul className={styles['list-options']}>
          <PartnershipInput
            type='checkbox'
            id='venue'
            name='venue'
            onChange={handleChange}
            checked={formData.venue}
            label='Venue'
            icon='venue'
          />
          <PartnershipInput
            type='checkbox'
            id='food'
            name='food'
            onChange={handleChange}
            checked={formData.food}
            label='Food'
            icon='food'
          />
          <PartnershipInput
            type='checkbox'
            id='drinks'
            name='drinks'
            onChange={handleChange}
            checked={formData.drinks}
            label='Drinks'
            icon='drinks'
          />
          <PartnershipInput
            type='checkbox'
            id='speakers'
            name='speakers'
            onChange={handleChange}
            checked={formData.speakers}
            label='Speakers'
            icon='speakers'
          />
          <PartnershipInput
            type='checkbox'
            id='workshops'
            name='workshops'
            onChange={handleChange}
            checked={formData.workshops}
            label='Workshops'
            icon='workshops'
          />
          <PartnershipInput
            type='checkbox'
            id='other'
            name='other'
            onChange={handleChange}
            checked={formData.other}
            label='Other'
            icon='other'
          />
        </ul>

        <ButtonLink
          element='button'
          type='submit'
          text='Submit'
          icon='circle-arrow-right'
          height={64}
          width={321}
        />
      </form>
    </section>
  );
}

export default Partnerships;
