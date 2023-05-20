import Link from 'next/link';

export default function Nav({ show }: { show: boolean }) {
  return (
    <nav className={`${show ? 'w-full' : 'w-auto'}`}>
      <ul
        className={`lg:flex ${
          show ? 'w-full flex flex-col items-center' : 'hidden'
        }`}
      >
        <li>
          <Link
            href='/events'
            className={`text-xl leading-[30px] mx-9 ${
              show && 'inline-block py-4'
            }`}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className={`text-xl leading-[30px] mx-9 ${
              show && 'inline-block py-4'
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='/news'
            className={`text-xl leading-[30px] mx-9 ${
              show && 'inline-block py-4'
            }`}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href='/jobs'
            className={`text-xl leading-[30px] mx-9 ${
              show && 'inline-block py-4'
            }`}
          >
            Jobs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
