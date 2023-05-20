import Link from 'next/link';
import React from 'react';

export default function SigninBtn() {
  return (
    <div className='bg-primary-color text-text-white w-[213px] h-16 flex flex-row items-center justify-center mx-12'>
      <Link href='/signin'>
        <span className='text-xl'>Sign in</span>
      </Link>
    </div>
  );
}
