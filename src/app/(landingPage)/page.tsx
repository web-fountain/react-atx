'use server';

import type { Metadata } from 'next';

import Hero from './Hero';
import Community from './Community';
import Join from './Join';
import Speakers from './Speakers';
import Partnerships from './Partnerships';
import AboutUs from './AboutUs';

import styles from './styles.module.css';


async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'React ATX | Home'
  };
}

async function Page() {
  return (
    <>
      <Hero />
      <Community />
      <Join />
      <Partnerships />
      <Speakers />
      <AboutUs />
    </>
  );
}


export { generateMetadata };
export default Page;
