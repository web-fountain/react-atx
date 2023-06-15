import React from 'react';

import NewsItem from '../NewsItem';
import styles from '../page.module.css';


const metadata = {title: 'React ATX | News'};
const tempNews = {
  json() {
    return [
      {newsItemId: 1, title: 'Cormac McCarthy has died', link: 'https://nytimes.com', dateTime: '2023-06-15T14:20:10.488Z', displayName: 'benbreen', numOfComments: '24', userId: '80236' },
      {newsItemId: 2, title: `McDonald's just dropped a brand new Game Boy game`, link: 'https://retrododo.com', dateTime: '2023-06-14T14:20:10.488Z', displayName: 'outime', numOfComments: '134', userId: '18347' },
      {newsItemId: 3, title: `Open source hospital price database`, link: 'https://dolthub.com', dateTime: '2023-06-01T14:20:10.488Z', displayName: 'alecst', numOfComments: '3', userId: '45405' },
      {newsItemId: 4, title: 'JupyterLab 4.0', link: 'https://jupyter.org', dateTime: '2023-06-15T14:20:10.488Z', displayName: 'jonbaer', numOfComments: '52', userId: '35214' },
      {newsItemId: 5, title: 'ZX81 Mechanical Keyboard ', link: 'https://github.com/swetland', dateTime: '2023-06-14T14:20:10.488Z', displayName: 'zoenolan', numOfComments: '89', userId: '10308' },
      {newsItemId: 6, title: `Lewis Hine’s early 20th-century “photo stories”`, link: 'https://smithsonianmag.com', dateTime: '2023-05-25T14:20:10.488Z', displayName: 'cratermoon', numOfComments: '2', userId: '10831' },
      {newsItemId: 7, title: 'Seventh one!', link: 'https://google.com', dateTime: new Date().toISOString(), displayName: 'Roberto Fuentes', numOfComments: '456', userId: '42395' },
      {newsItemId: 8, title: 'Eighth one!', link: 'https://paulgraydon.co.uk', dateTime: new Date().toISOString(), displayName: 'Roberto Fuentes', numOfComments: '12', userId: '40982' },
      {newsItemId: 9, title: 'Ninth one!', link: 'https://google.com', dateTime: new Date().toISOString(), displayName: 'Roberto Fuentes', numOfComments: '76', userId: '29839' },
      {newsItemId: 10, title: 'Tenth one!', link: 'https://google.com', dateTime: new Date().toISOString(), displayName: 'Roberto Fuentes', numOfComments: '1', userId: '13857' },
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

async function ReactNews() {
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
export default ReactNews;
