import React from 'react';
import Hero from '@/components/Hero';
import Community from '@/components/Community';
import Join from '@/components/Join';
import Speakers from '@/components/Speakers';
import Partnerships from '@/components/Partnerships';
import AboutUs from '@/components/AboutUs';


export const metadata = {
  title: 'React ATX | Home'
};

export default function Home() {
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
