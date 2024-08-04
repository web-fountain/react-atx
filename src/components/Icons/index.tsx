import type { SVGProps } from 'react';


function Icon({ name, className='', ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg className={`icon ${className}`} {...props}>
      <use href={`sprites/landingPage.svg#icon-${name}`} />
    </svg>
  );
}


export default Icon;
