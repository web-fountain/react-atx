import React from 'react';
import Link from 'next/link';
import Icons from '@Icons';
import styles from './styles.module.css';


interface Props {
  element: 'next-link' | 'anchor' | 'button';
  text: string;
  icon: string;
  height: number;
  width: number;
  path?: string;
  type?: 'submit' | 'button';
}

export default function ButtonLink({
  element,
  path,
  type,
  text,
  icon,
  height,
  width
}: Props) {
  if (element === 'next-link') {
    return (
      <Link
        href={`${path}`}
        style={{ height: height + 'px', maxWidth: width + 'px' }}
        className={styles.container}
      >
        <div className={styles['text-box']}>
          <span>
            {text}
            <Icons name={`${icon}`} />
          </span>
        </div>
      </Link>
    );
  } else if (element === 'anchor') {
    return (
      <a
        href={`${path}`}
        style={{ height: height + 'px', maxWidth: width + 'px' }}
        className={styles.container}
      >
        <div className={styles['text-box']}>
          <span>
            {text}
            <Icons name={`${icon}`} />
          </span>
        </div>
      </a>
    );
  } else {
    return (
      <button
        type={type}
        style={{ height: height + 'px', maxWidth: width + 'px' }}
        className={styles.container}
      >
        <div className={styles['text-box']}>
          <span>
            {text}
            <Icons name={`${icon}`} />
          </span>
        </div>
      </button>
    );
  }
}
