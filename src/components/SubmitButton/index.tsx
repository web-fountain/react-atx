'use client';

import { useFormStatus } from 'react-dom';
import styles from './styles.module.css';


interface Props {
  label: string;
  className?: string;
}

function SubmitButton({ label='submit', className='' }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${styles['button']} ${className}`}
      type='submit'
      aria-disabled={pending}
    >
      {label}
    </button>
  );
}


export default SubmitButton;
