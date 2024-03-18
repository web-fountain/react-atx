import Link from 'next/link';

import Icon from '@Icons';
import styles from './styles.module.css';


function ButtonLink({ text, href, icon }) {
  return (
    <Link
      href={`${href}`}
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
