import styles from './events.module.css';
import EventLayout from '@/components/EventLayout';


export const metadata = {
  title: 'React ATX | Events'
};

export default function Events() {
  return (
    <main className="main-layout">
      <section className={styles.container}>
        <EventLayout />
      </section>
    </main>
  );
}
