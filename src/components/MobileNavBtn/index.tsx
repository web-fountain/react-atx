import React from 'react';
import styles from './styles.module.css';


interface Props {
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileNavBtn({ showNav, setShowNav }: Props) {
  return (
    <button
      type="button"
      className={`${styles.mobileNavBtn} ${showNav && styles.open}`}
      onClick={() => setShowNav((prev) => !prev)}
    >
      <svg viewBox="0 0 100 100" height="100%" width="100%">
        <line
          x1="0"
          x2="100"
          y1="25"
          y2="25"
          strokeWidth="16"
          stroke="var(--primary-color)"
          strokeLinecap="round"
        />
        <line
          x1="0"
          x2="100"
          y1="50"
          y2="50"
          strokeWidth="16"
          stroke="var(--primary-color)"
          strokeLinecap="round"
        />
        <line
          x1="0"
          x2="100"
          y1="75"
          y2="75"
          strokeWidth="16"
          stroke="var(--primary-color)"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}


export default MobileNavBtn;
