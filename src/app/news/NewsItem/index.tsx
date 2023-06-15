import { DateTime } from 'luxon';
import React from 'react';

import styles from './styles.module.css';


type NewsItem = {
  newsItemId: string;
  title: string;
  link: string;
  dateTime: string;
  displayName: string;
  numOfComments: string;
  userId: string;
}

function NewsItem({ newsItem }: { newsItem: NewsItem }) {
  const {
    newsItemId, title, link,
    userId, displayName, dateTime, numOfComments
  } = newsItem;
  const { hostname } = new URL(link);

  return (
    <li id={newsItemId} className={styles['news-item']}>

      <div className={styles.titleline}>
        <span className={styles.line}>
          <a className={styles.title} href={link}>{title}</a>
          &nbsp;
          (<a href="/news/hostname">{hostname}</a>)
        </span>
      </div>

      <div className={styles.subline}>
        <span className={styles.line}>
          by&nbsp;<a href={`/news/users/${userId}`}>{displayName}</a>

          &nbsp;
          <span className={styles.datetime}>{DateTime.fromISO(dateTime).toRelative()}</span>
          &nbsp;
          |
          &nbsp;
          <a href={`/news/${newsItemId}/comments`}>{numOfComments} comments</a>
        </span>
      </div>

    </li>
  );
};

export default NewsItem;
