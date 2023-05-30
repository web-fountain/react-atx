import React from 'react';
import NewsItem from '../NewsItem';

import styles from './styles.module.css';


type Item = {
    id?: number;
    heading?: string;
    link?: string;
    date?: number;
    author?: string;
    atx?: boolean;
    lang?: string;
}

function NewsList(props: { news: Array<Item> }) {
    return (
        <ul className={styles.list}>
            {props.news.map((item): JSX.Element =>
                <NewsItem item={item} key={item.id}/>
            )}
        </ul>
    );
};

export default NewsList;