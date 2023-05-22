'use client';

import { useState } from 'react';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import ReactSmallLogo from '@Icons/ReactSmallLogo';
import Nav from './Nav';
import SigninBtn from './SigninBtn';
import BurgerBtn from './BurgerBtn';

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className='bg-background-color h-[101px] w-full fixed top-0 left-0 border-b'>
      <div
        className='bg-header-image h-[274px] w-[1440px] bg-no-repeat absolute'
        style={{ backgroundPosition: 'center 0px' }}
      ></div>
      <div className='h-full w-full max-w-[1440px] mx-auto flex items-center px-4 relative'>
        <div className='h-[60px] w-[60px] mr-auto'>
          <Link href='/'>
            <ReactSmallLogo />
          </Link>
        </div>
        <div
          className={`absolute top-[101px] left-0 w-full flex items-center justify-around transition-transform origin-top lg:w-auto lg:flex lg:items-center lg:relative lg:top-0 lg:scale-100 ${
            show
              ? 'bg-background-color scale-100 flex-col h-[calc(100vh-101px)]'
              : 'scale-0'
          }`}
        >
          <Nav show={show} />
          <ThemeToggle />
          <SigninBtn />
        </div>
        <BurgerBtn show={show} setShow={setShow} />
      </div>
    </header>
  );
}
