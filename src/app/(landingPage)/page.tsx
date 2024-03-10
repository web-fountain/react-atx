'use server';

import Hero from './Hero';
import Community from './Community';
import Join from './Join';
import Speakers from './Speakers';
import Partnerships from './Partnerships';
import AboutUs from './AboutUs';
import './styles.css';


export default async function Page() {
  return (
    <div className='page-layout'>
      <Hero />
      <Community />
      <Join />
      <Partnerships />
      <Speakers />
      <AboutUs />
    </div>
  );
}
