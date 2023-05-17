import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import ReactSmallLogo from '../Icons/ReactSmallLogo';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='h-[101px] w-full fixed top-0 left-0'>
      <div className='h-full w-full max-w-[1440px] mx-auto border flex items-center px-4'>
        <div className='h-[60px] w-[60px] mr-auto'>
          <Link href='/'>
            <ReactSmallLogo />
          </Link>
        </div>
        <Nav />
        <ThemeToggle />
      </div>
    </header>
  );
}
