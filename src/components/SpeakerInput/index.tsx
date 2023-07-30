import React from 'react';
import styles from './styles.module.css';


interface Props {
  label: string;
  id: string;
  type: 'text' | 'checkbox';
  value?: string;
  checked?: boolean;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  descr?: string
}

export default function SpeakerInput({
  label,
  id,
  type,
  value,
  checked,
  name,
  placeholder,
  onChange,
  descr
}: Props) {
  if (type === 'text') {
    return (
      <li className={styles['list-info-item']}>
        <label htmlFor={id}>{label}</label>
        <input type={type} value={value} id={id} name={name} placeholder={placeholder} onChange={onChange} />
      </li>
    );
  } else {
    return (
      <li className={styles['list-check-item']}>
        <div>
          <input type={type} checked={checked} id={id} name={name} onChange={onChange} />
          <label htmlFor={id}>{label}</label>
        </div>
        <p>{descr}</p>
      </li>
    );
  }
}
