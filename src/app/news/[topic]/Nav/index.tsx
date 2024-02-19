import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';


const topics = [
  'React',
  'CSS',
  'JavaScript'
];

function Nav(props: { topic: String }) {   
  return (
    <nav>
      <ul className={styles.container}>
        {topics.map(element =>
          <li key={element}>
            <Link
              href={`news/${element.toLowerCase()}`}
              className={element.toLowerCase() === props.topic
                ? `${styles.topic} ${styles.active}` 
                : `${styles.topic}`}
            >
              {element}
            </Link>
          </li>
        )}        
      </ul>
    </nav>
  );
};

export { topics };
export default Nav;