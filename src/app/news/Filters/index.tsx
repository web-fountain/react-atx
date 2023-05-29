import React from 'react';

import styles from './styles.module.css';


const filters = [
    'React',
    'CSS',
    'JavaScript',
];

function Filters({ setFilter, filter }) {
    
    return (
        <ul className={styles['filters-container']}>
            {filters.map(element =>
                <li
                    key={element}
                    className={element.toLowerCase() === filter
                                ? `${styles.filter} ${styles.active}` 
                                : `${styles.filter}`}
                    onClick={() => setFilter(element.toLowerCase())}
                >
                    {element}
                </li>
            )}
            
        </ul>
    );
};

export default Filters;