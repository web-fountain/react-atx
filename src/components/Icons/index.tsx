import type { SVGProps } from 'react';
import './styles.css';


function Icon({ name, className='', ...props }: SVGProps<SVGSVGElement> & { name: string }) {
  return (
    <svg className={`icon-${name} ${className}`} {...props}>
      <use href={`#icon-${name}`} />
    </svg>
  );
}



// export { default as ArrowRight } from './ArrowRight';
export { default as ArrowUpRight } from './ArrowUpRight';
// export { default as CircleArrowRight } from './CircleArrowRight';
// export { default as CircleExclamation } from './CircleExclamation';
// export { default as DiscordWhite } from './DiscordWhite';
// export { default as Drinks } from './Drinks';
// export { default as Food } from './Food';
export { default as GitHub } from './GitHub';
// export { default as Lightbulb } from './Lightbulb';
// export { default as LinkedIn } from './LinkedIn';
// export { default as Moon } from './Moon';
// export { default as Other } from './Other';
export { default as ReactLogo } from './ReactLogo';
// export { default as ReactLargeLogo } from './ReactLargeLogo';
// export { default as Speakers } from './Speakers';
// export { default as Sun } from './Sun';
export { default as Twitter } from './Twitter';
// export { default as Venue } from './Venue';
// export { default as Workshops } from './Workshops';
export default Icon;
