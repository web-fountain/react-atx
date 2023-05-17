'use client';

import Link from 'next/link';
import BurgerBtn from './BurgerBtn';
import { useState } from 'react';

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <nav className='flex'>
      <ul className={`lg:flex ${show ? 'flex' : 'hidden'}`}>
        <li>
          <Link href='/events' className='text-xl leading-[30px] mx-9'>
            Events
          </Link>
        </li>
        <li>
          <Link href='/projects' className='text-xl leading-[30px] mx-9'>
            Projects
          </Link>
        </li>
        <li>
          <Link href='/news' className='text-xl leading-[30px] mx-9'>
            News
          </Link>
        </li>
        <li>
          <Link href='/jobs' className='text-xl leading-[30px] mx-9'>
            Jobs
          </Link>
        </li>
      </ul>
      <BurgerBtn show={show} setShow={setShow} />
    </nav>
  );
}
