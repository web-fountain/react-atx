import ArrowRight from './ArrowRight';
import ArrowUpRight from './ArrowUpRight';
import CircleArrowRight from './CircleArrowRight';
import CircleExclamation from './CircleExclamation';
import DiscordWhite from './DiscordWhite';
import Drinks from './Drinks';
import Food from './Food';
import GitHub from './GitHub';
import Lightbulb from './Lightbulb';
import LinkedIn from './LinkedIn';
import Moon from './Moon';
import Other from './Other';
import ReactLogo from './ReactLogo';
import Speakers from './Speakers';
import Sun from './Sun';
import Twitter from './Twitter';
import Venue from './Venue';
import Workshops from './Workshops';


type Props = {
  color?: string;
  className?: string;
  inlineFill?: string;
  inlineStroke?: string;
  name: string;
};

function Icons({ name, ...props }: Props): JSX.Element {
  const icons: Record<Props['name'], any> = {
    'arrow-right':          <ArrowRight {...props} />,
    'arrow-up-right':       <ArrowUpRight {...props} />,
    'circle-arrow-right':   <CircleArrowRight {...props} />,
    'circle-exclamation':   <CircleExclamation {...props} />,
    'discord-white':        <DiscordWhite {...props} />,
    'drinks':               <Drinks {...props} />,
    'food':                 <Food {...props} />,
    'github':               <GitHub {...props} />,
    'lightbulb':            <Lightbulb {...props} />,
    'linkedIn':             <LinkedIn {...props} />,
    'moon':                 <Moon {...props} />,
    'other':                <Other {...props} />,
    'react-logo':           <ReactLogo {...props} />,
    'speakers':             <Speakers {...props} />,
    'sun':                  <Sun {...props} />,
    'twitter':              <Twitter {...props} />,
    'venue':                <Venue {...props} />,
    'workshops':            <Workshops {...props} />
  };

  return icons[name];
}


export default Icons;
