"use client"
import CurrentEvents from "@/components/CurrentEvents"
import EventsHeading from "@/components/EventsHeading"
import EventYears from "@/components/EventYears"
import {
  ArrowRightIcon,
  SpeakersSmallIcon,
  SponsoringIcon,
} from "@/components/Icons"
import PastEvents from "@/components/PastEvents"
import Link from "next/link"
import React from "react"
import styles from "./events.module.css"

export default function Events() {
  const [showYears, setShowYears] = React.useState<boolean>(false)
  return (
    <main className="main-layout">
      <section className={styles.container}>
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
      </section>
    </main>
  )
}
