import React from 'react';

import Icons from '@Icons';
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

function NewsItem({ item }): JSX.Element {
    return (
        <li className={styles.item}>
            <div className={styles.icon}>
                <Icons name='react-logo' />
            </div>
            <div className={styles.info}>
                <div>
                    <p className={styles.heading}>{item.heading}</p>
                    <a href={item.link} target='_blank'>{item.link}</a>
                </div>
                <div>
                    <div className={styles.date}>
                        <Icons name='circle-exclamation' />
                        <p>{Math.floor((Date.now() - item.date) / 60000)} minutes ago</p>
                    </div>
                    <p className={styles.author}>
                        by {item.author}
                    </p>
                </div>
            </div>
            <div className={item.atx ? styles.atx : ''}>
                <p>{item.atx ? 'ATX' : ''}</p>
            </div>
        </li>
    );
};

export default NewsItem;