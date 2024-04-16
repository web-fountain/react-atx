'use client';

import styles from './styles.module.css';


interface Props {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
  id, label, name, placeholder, value, onChange
}: Props) {
  return (
    <li className={styles['text-input-item']}>
      <label htmlFor={id}>{label}</label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </li>
  );
}


export default TextInput;
