import type { UrlObject } from 'node:url';
import type { Route } from 'next';
import Link from 'next/link';

import Icon from '@Icons';
import styles from './styles.module.css';


type Props<T extends string> = {
  text: string;
  href: UrlObject | Route<T>;
  icon: string;
};

function ButtonLink<T extends string>({ text, href, icon }: Props<T>) {
  return (
    <Link
      href={href}
      className={styles['container']}
    >
      <div className={styles['text-box']}>
        <span>
          {text}
          {icon && <Icon name={icon} className={styles[`icon-${icon}`]} />}
        </span>
      </div>
    </Link>
  );
}


export default ButtonLink;
