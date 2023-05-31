import React from 'react';
import NewsList from './NewsList';

import styles from './styles.module.css';


export const metadata = {
  title: 'React ATX | News'
};

function News() {
  return (
    <main className={`${styles.news} main-layout`}>
      <h2>News</h2>
      <NewsList/>
    </main>
  );
}

export default News;
