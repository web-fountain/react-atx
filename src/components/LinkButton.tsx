import React from 'react';
import Icons from '@Icons';

interface Props {
  el?: 'anchor';
  type?: 'button' | 'submit';
  icon?: string;
  path?: string;
  text: string;
}

export default function LinkButton({ el, type, icon, path, text }: Props) {
  if (el === 'anchor') {
    return (
      <a
        href={`${path}`}
        className='bg-primary-color w-[260px] h-[64px] flex items-center justify-center'
      >
        <div>
          <span className='text-text-white flex items-center text-20px leading-30'>
            {text} <Icons name={`${icon}`} />
          </span>
        </div>
      </a>
    );
  } else {
    return (
      <button type={type} className='bg-primary-color'>
        {text}
        {icon}
      </button>
    );
  }
}
