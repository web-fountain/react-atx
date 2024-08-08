'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import useForm from '@Hooks/useForm'
import speakersSchema from './schema';
import speakersAction from './actions';

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
}

function Speakers() {
  const { handleAction, handleSubmit, actionState, isPending, errors } = useForm({
    schema: speakersSchema,
    action: speakersAction,
    initialFormActionState: { success: false, errors: null, data: null }
  });

  const [formData, setFormData] = useState<SpeakerFormTypes>({
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

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = evt.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? (evt.target as HTMLInputElement).checked : value
    }));
  };

  // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //   console.log('formdata', formData);
  // };

  return (
    <section id="speakers" className={styles['layout']}>
      <div>
        <h1>Speakers</h1>
        <h2>Interested in speaking at our next event? Please fill out the form below</h2>

        <form
          id="SpearkersForm"
          name="SpearkersForm"
          className={styles['form']}

          onSubmit={handleSubmit}
        >
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
                  placeholder="Summary of your talk..."
                  rows={10}
                  onChange={handleChange}
                />
              </li>
            </div>
          </ul>

          <SubmitButton
            disabled={isPending}
            formId="SpeakersForm"
            label="Submit"
          />
        </form>
      </div>
    </section>
  );
}

export default Speakers;
