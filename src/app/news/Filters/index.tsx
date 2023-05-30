import React from 'react';

import styles from './styles.module.css';


const filters = [
    'React',
    'CSS',
    'JavaScript',
];

function Filters(props: { setFilter: Function, filter: String }) {
    
    return (
        <ul className={styles['filters-container']}>
            {filters.map(element =>
                <li
                    key={element}
                    className={element.toLowerCase() === props.filter
                                ? `${styles.filter} ${styles.active}` 
                                : `${styles.filter}`}
                    onClick={() => props.setFilter(element.toLowerCase())}
                >
                    {element}
                </li>
            )}
            
        </ul>
    );
};

export default Filters;