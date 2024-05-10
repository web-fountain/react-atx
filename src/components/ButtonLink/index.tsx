
import Link from 'next/link';
import type { UrlObject } from 'node:url';

import Icon from '@Icons';
import styles from './styles.module.css';


type Props = {
  text: string;
  href: UrlObject;
  icon: string;
};

function ButtonLink({ text, href, icon }: Props) {
  return (
    <Link
      href={href}
      className={styles['container']}
    >
      <div className={styles['text-box']}>
        <span>
          {text}
          {icon && <Icon name={icon} />}
        </span>
      </div>
    </Link>
  );
}


export default ButtonLink;
