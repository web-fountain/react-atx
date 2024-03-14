'use client';

import { useFormStatus } from 'react-dom';
import styles from './styles.module.css';
import Icons from '@Icons';


function SubmitButton({ btn }: { btn: string }) {
  const { pending } = useFormStatus();

  return (
    <button className={styles[`${btn}`]} type="submit" aria-disabled={pending}>
      Submit <Icons name="arrow-right" color={btn} />
    </button>
  );
}

export default SubmitButton;
