import {
  ArrowUpRight, GitHub, ReactLogo, Twitter
} from '@Icons';


function LandingPage() {
  return (
    <div className='hidden'>
      <svg>
        <defs>
          <symbol id="icon-arrow-up-right">
            <ArrowUpRight />
          </symbol>

          <symbol id="icon-github">
            <GitHub />
          </symbol>

          <symbol id="icon-react-logo">
            <ReactLogo />
          </symbol>

          <symbol id="icon-twitter">
            <Twitter />
          </symbol>
        </defs>
      </svg>
    </div>
  );
}


export default LandingPage;
