import React from 'react';
import NewsList from './NewsList';


export const metadata = {
  title: 'React ATX | News'
};

function News() {
  return (
    <main className="main-layout">
      <h2>News</h2>
      <NewsList/>
    </main>
  );
}

export default News;
