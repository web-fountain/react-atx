'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';

import Icon from '@Icons';
import TextInput from '@Components/TextInput';
import SubmitButton from '@Components/SubmitButton';

import styles from './styles.module.css';

interface SpeakerFormTypes {
  name: string;
  jobTitle: string;
  email: string;
  company: string;
  topic: string;
  summary: string;
  showcase: boolean;
  instructional: boolean;
  interactive: boolean;
  developerPanel: boolean;
  lightningTalk: boolean;
}

function Speakers() {
  const { pending } = useFormStatus();
  const [formData, setFormData] = useState<SpeakerFormTypes>({
    name: '',
    jobTitle: '',
    email: '',
    company: '',
    topic: '',
    summary: '',
    showcase: false,
    instructional: false,
    interactive: false,
    developerPanel: false,
    lightningTalk: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // const { name, value, type, checked } = e.target;
    const name = e.target.name;
    const type = e.target.type;
    const value = e.target.value;
    const checked = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('formdata', formData);
  };

  return (
    <section id="speakers" className={styles['layout']}>
      <div>
        <h2>Speakers</h2>
        <h3>Interested in speaking at our next event? Please fill out the form below</h3>

        <form className={styles['form']} onSubmit={handleSubmit}>
          <ul className={styles['text-input-list']}>
            <TextInput
              id="name"
              name="name"
              label="Name *"
              placeholder="name"
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

            <div className={styles['topic-summary']}>
              <TextInput
                id="topic"
                name="topic"
                label="Topic"
                placeholder="topic"
                value={formData.topic}
                onChange={handleChange}
              />

              <li className={styles['summary']}>
                <label htmlFor="summary">Summary</label>
                <textarea
                  id="summary"
                  name="Summary"
                  value={formData.summary}
                  onChange={handleChange}
                  placeholder="Summary of your talk..."
                  rows={10}
                />
              </li>
            </div>
          </ul>

          <SubmitButton label="Submit" disabled={pending} />
        </form>
      </div>
    </section>
  );
}

export default Speakers;
