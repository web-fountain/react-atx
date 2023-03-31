import React from 'react';

import Hero from './Hero';
import Community from './Community';
import Join from './Join';
import Speakers from './Speakers';
import Partnerships from './Partnerships';
import AboutUs from './AboutUs';


const metadata = {
  title: 'React ATX | Home'
};

function Home() {
  return (
    <main className="main-layout">
      <Hero />
      <Community />
      <Join />
      <Speakers />
      <Partnerships />
      <AboutUs />
    </main>
  );
}


export { metadata };
export default Home;
