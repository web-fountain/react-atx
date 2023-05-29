import React from 'react';
import NewsItem from '../NewsItem';

import styles from './styles.module.css';


function NewsList({ news }) {
    return (
        <ul className={styles.list}>
            {news.map((item): JSX.Element =>
                <NewsItem item={item} key={item.id}/>
            )}
        </ul>
    );
};

export default NewsList;