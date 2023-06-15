import React from 'react';

import NewsItem from '../NewsItem';
import styles from '../page.module.css';


const metadata = {title: 'React ATX | News'};
const tempNews = {
  json() {
    return [
      {id: 1, heading: 'First one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: true, lang: 'react'},
      {id: 2, heading: 'Second one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: true, lang: 'react'},
      {id: 3, heading: 'Third one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: false, lang: 'css'},
      {id: 4, heading: 'Fourth one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: true, lang: 'css'},
      {id: 5, heading: 'Fivth one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: true, lang: 'react'},
      {id: 6, heading: 'Sixth one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: false, lang: 'react'},
      {id: 7, heading: 'Seventh one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: true, lang: 'javasctipt'},
      {id: 8, heading: 'Eighth one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: false, lang: 'javascript'},
      {id: 9, heading: 'Ninth one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: false, lang: 'css'},
      {id: 10, heading: 'Tenth one!', link: 'https://google.com', date: Date.now(), author: 'Roberto Fuentes', atx: true, lang: 'react'}
    ];
  }
};

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tempNews)
    }, 2000);
  });
}

async function getData() {
//   const res = await fetch('https://...', { next: { revalidate: 10 } })
  const res = await fetchData();

//   if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data')
//   }

  return res.json();
}

async function JavaScriptNews() {
  const newsItems = await getData();

  return (
    <section>
      <ul className={styles['news-list']}>
        {newsItems.map((newsItem) => <NewsItem key={newsItem.id} newsItem={newsItem} />)}
      </ul>
    </section>
  );
}


export { metadata };
export default JavaScriptNews;
