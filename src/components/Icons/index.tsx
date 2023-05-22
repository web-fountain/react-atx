import ArrowUpRight from './ArrowUpRight';
import DiscordWhite from './DiscordWhite';
import Lightbulb from './Lightbulb';
import Moon from './Moon';
import ReactLogo from './ReactLogo';
import Sun from './Sun';

type Props = {
  color?: string;
  className?: string;
  inlineFill?: string;
  inlineStroke?: string;
  name: string;
};

function Icons({ name, ...props }: Props): JSX.Element {
  const icons: Record<Props['name'], any> = {
    'arrow-up-right': <ArrowUpRight {...props} />,
    lightbulb: <Lightbulb {...props} />,
    'discord-white': <DiscordWhite {...props} />,
    moon: <Moon {...props} />,
    'react-logo': <ReactLogo {...props} />,
    sun: <Sun {...props} />
  };

  return icons[name];
}

export default Icons;
