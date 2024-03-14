'use client';

import { useState } from 'react';
// import { useFormStatus } from 'react-dom';

import Icons from '@Icons';
import styles from './styles.module.css';
import SubmitButton from '@/components/SubmitButton';
import SpeakerInput from '@Components/SpeakerInput';


interface SpeakerFormTypes {
  name: string;
  jobTitle: string;
  email: string;
  company: string;
  topic: string;
  showcase: boolean;
  instructional: boolean;
  interactive: boolean;
  developerPanel: boolean;
  lightningTalk: boolean;
}

function Speakers() {
  // const { pending } = useFormStatus();
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

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
    <section className={styles.container} id="speakers">
      <h2>Speakers</h2>
      <p>Interested in speaking at our next event? Please fill out the form below</p>

      <form className={styles['speaker-form']} onSubmit={handleSubmit}>
        <ul className={styles['list-info']}>
          <SpeakerInput
            label="Name"
            id="name"
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={formData.name}
          />
          <SpeakerInput
            label="Job Title"
            id="jobTitle"
            type="text"
            name="jobTitle"
            placeholder="job title"
            onChange={handleChange}
            value={formData.jobTitle}
          />
          <SpeakerInput
            label="Email"
            id="email"
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={formData.email}
          />
          <SpeakerInput
            label="Company"
            id="company"
            type="text"
            name="company"
            placeholder="company"
            onChange={handleChange}
            value={formData.company}
          />
          <SpeakerInput
            label="Topic"
            id="topic"
            type="text"
            name="topic"
            placeholder="topic"
            onChange={handleChange}
            value={formData.topic}
          />
        </ul>
        <h4 className={styles['topic-presentation']}>How Would you like to present your topic?</h4>
        <div className={styles.hint}>
          <Icons name="circle-exclamation" />
          <p>You can choose only one of the options</p>
        </div>
        <ul className={styles['list-checks']}>
          <SpeakerInput
            label="Showcase"
            id="showcase"
            type="checkbox"
            name="showcase"
            onChange={handleChange}
            descr="Information on current projects or tools and must include photos
              of code or do some live coding."
            checked={formData.showcase}
          />
          <SpeakerInput
            label="Instructional"
            id="instructional"
            type="checkbox"
            name="instructional"
            onChange={handleChange}
            descr="Step by step instructions with credible references that link back
            to best practices, using some live code or photos of your code to
            give context."
            checked={formData.instructional}
          />
          <SpeakerInput
            label="Interactive"
            id="interactive"
            type="checkbox"
            name="interactive"
            onChange={handleChange}
            descr="Hands on live coding with audience participation: Giving audience a problem to solve in 15 or so minutes and then providing a solution, etc."
            checked={formData.interactive}
          />
          <SpeakerInput
            label="Developer Panel"
            id="developerPanel"
            type="checkbox"
            name="developerPanel"
            onChange={handleChange}
            descr="Friendly debate or showdown on a topic. How long do you want to present for?"
            checked={formData.developerPanel}
          />
          <SpeakerInput
            label="Lightning Talk"
            id="lightningTalk"
            type="checkbox"
            name="lightningTalk"
            onChange={handleChange}
            descr="If you want to practice your presentaion skills."
            checked={formData.lightningTalk}
          />
        </ul>
        <SubmitButton btn="primary" />
      </form>
    </section>
  );
}

export default Speakers;
