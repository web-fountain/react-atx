import ArrowRight from '@/components/Icons/ArrowUpRight';

export const metadata = {
  title: 'React ATX | Home',
  description: 'reactjs meetup website',
};

export default function Home() {
  return (
    <div className='w-full max-w-6xl mx-auto'>
      <section className=''>
        <h1>React ATX</h1>
        <h3>Join Austin&apos;s React Community</h3>
        <p>
          We&apos;re a community of developers that come together to learn,
          share, and explore the world of frontend with ReactJS.
        </p>
        <a href='#join' className='bg-primary-color w-[260px] h-[64px] block'>
          <div className=''>
            <span className=''>
              Join Now
              <ArrowRight />
            </span>
          </div>
        </a>
      </section>
    </div>
  );
}
