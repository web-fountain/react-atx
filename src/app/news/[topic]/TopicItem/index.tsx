'use client';

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
  topic?: string;
};

function TopicItem(props: { item: Item }) {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        <Icons name='react-logo' />
      </div>
      <div className={styles.info}>
        <div className={styles['heading-block']}>
          <p className={styles.heading}>{props.item.heading}</p>
          <a href={props.item.link} target='_blank'>{props.item.link}</a>
        </div>
        <div className={styles['credentials-block']}>
          <div className={styles.date}>
            <Icons name='circle-exclamation' />
            <p>{props.item.date
              ? Math.floor((Date.now() - props.item.date) / 60000)
              : 0
              } minutes ago
            </p>
          </div>
          <p className={styles.author}>
            by {props.item.author}
          </p>
        </div>
      </div>
      <div className={props.item.atx ? styles.atx : ''}>
        <p>{props.item.atx ? 'ATX' : ''}</p>
      </div>
    </li>
  );
};

export default TopicItem;