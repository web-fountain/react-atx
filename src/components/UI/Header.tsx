import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import ReactSmallLogo from '../Icons/ReactSmallLogo';
import Nav from './Nav';
import SigninBtn from './SigninBtn';

export default function Header() {
  return (
    <header className='bg-background-color h-[101px] w-full fixed top-0 left-0 border-b'>
      <div className='h-full w-full max-w-[1440px] mx-auto flex items-center px-4'>
        <div className='h-[60px] w-[60px] mr-auto'>
          <Link href='/'>
            <ReactSmallLogo />
          </Link>
        </div>
        <Nav />
        <ThemeToggle />
        <SigninBtn />
      </div>
    </header>
  );
}
