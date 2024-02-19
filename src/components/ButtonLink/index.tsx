import type { ReactNode } from 'react';
import Link from 'next/link';

import Icons from '@Icons';
import styles from './styles.module.css';


interface Props {
  children: ReactNode;
  href: string;
}

function ButtonLink({ children, href }: Props) {
  return (
    <Link
      href={`${href}`}
      className={styles['container']}
    >
      <div className={styles['text-box']}>
        <span>
          {children}
          <Icons name='arrow-up-right' />
        </span>
      </div>
    </Link>
  );
}


export default ButtonLink;
