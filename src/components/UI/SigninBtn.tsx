import Link from 'next/link';
import React from 'react';

export default function SigninBtn() {
  return (
    <Link href='/signin'>
      <div className='bg-primary-color text-text-white w-[213px] h-16 hidden lg:flex flex-row items-center justify-center mx-12'>
        <span className='text-xl'>Sign in</span>
      </div>
    </Link>
  );
}
