import Hero from './Hero';
import Community from './Community';
import Join from './Join';
import Speakers from './Speakers';
import Partnerships from './Partnerships';
import AboutUs from './AboutUs';

import './styles.css';

import getServerSession from 'next-auth';
// import { authOptions } from '../../app/api/auth/[...nextauth]/route';


const metadata = {title: 'React ATX | Home'};
async function Home() {
//   const session = await getServerSession(authOptions);

//   console.log('home', session);
  return (
    <main className="main-layout page-layout">
      <Hero />
      <Community />
      <Join />
      <Partnerships />
      <Speakers />
      <AboutUs />
    </main>
  );
}


export { metadata };
export default Home;
