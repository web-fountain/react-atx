import {
  ArrowUpRight, Drinks, Food, GitHub, Other, ReactLogo, Speakers, Twitter, Venue, Workshops
} from '@Icons';


function LandingPage() {
  return (
    <div className='hidden'>
      <svg>
        <defs>
          <ArrowUpRight />
          <Drinks />
          <Food />
          <GitHub />
          <Other />
          <ReactLogo />
          <Speakers />
          <Twitter />
          <Venue />
          <Workshops />
        </defs>
      </svg>
    </div>
  );
}


export default LandingPage;
