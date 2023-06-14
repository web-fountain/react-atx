'use client';

import React, { useMemo } from 'react';
import { useState } from 'react';
import NewsItem from '../NewsItem';
import Filters from '../Filters';

import styles from './styles.module.css';


const tempNews = [
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

function NewsList() {
  const [news, setNews] = useState(tempNews);
  const [filter, setFilter] = useState('react');
  
  const filteredNews = useMemo(() => {
    return news.filter(item => item.lang === filter);
  }, [news, filter]);

  return (
    <>      
      <Filters
        filter={filter}
        setFilter={setFilter}
      />
      <ul className={styles.list}>
        {filteredNews.map((item) =>
          <NewsItem item={item} key={item.id}/>
        )}
      </ul>
    </>        
  );
};

export default NewsList;