import LinkButton from '@/components/LinkButton';

export const metadata = {
  title: 'React ATX | Home',
  description: 'reactjs meetup website'
};

export default function Home() {
  return (
    <div className='w-full max-w-6xl mx-auto'>
      <section className=''>
        <h4>React ATX</h4>
        <h3>Join Austin&apos;s React Community</h3>
        <p>
          We&apos;re a community of developers that come together to learn,
          share, and explore the world of frontend with ReactJS.
        </p>
        <LinkButton
          text='Join now'
          el='anchor'
          path='#join'
          icon='arrow-up-right'
        />
      </section>
    </div>
  );
}
