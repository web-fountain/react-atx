'use client';
import styles from '../../app/events/events.module.css';
import EventsHeading from '../../../components/EventsHeading';
import EventYears from '../EventYears';
import { SponsoringIcon, ArrowRightIcon, SpeakersSmallIcon } from '../../../components/Icons';
import Link from 'next/link';
import React from 'react';
import CurrentEvents from '../CurrentEvents';
import PastEvents from '../PastEvents';


export default function EventLayout() {
  const [showYears, setShowYears] = React.useState<boolean>(false);
  return (
    <div className={styles.eventLayout}>
      <EventYears showYears={showYears} />
      <div className={styles.eventsWrapper}>
        <EventsHeading setShowYears={setShowYears} />
        <div>
          <h3>Interested in</h3>
          <div className={styles.eventServices}>
            <Link href="/#partnership">
              <SponsoringIcon />
              <span>
                Sponsoring an event
                <ArrowRightIcon className={styles.arrow} />
              </span>
            </Link>
            <Link href="/#speakers">
              <SpeakersSmallIcon />
              <span>
                Speaking at an event
                <ArrowRightIcon className={styles.arrow} />
              </span>
            </Link>
          </div>
        </div>
        <CurrentEvents />
        <PastEvents />
      </div>
    </div>
  );
}
