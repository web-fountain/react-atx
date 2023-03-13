import { balloons } from "@/assets/images"
import EventDates from "@/components/EventDates"
import {
  ArrowRightIcon,
  AvatarIcon,
  ClockIcon,
  HourGlassIcon,
  SpeakersSmallIcon,
  SponsoringIcon,
} from "@/components/Icons"
import ExclamationIcon from "@/components/Icons/ExclamationIcon"
import Image from "next/image"
import Link from "next/link"
import styles from "./events.module.css"

export default function Events() {
  return (
    <main className="main-layout">
      <div className={styles.container}>
        <EventDates />
        <section className={styles.eventSec}>
          <header className={styles.header}>
            <h3>Events</h3>
            <button type="button" className={styles.hourglassBtn}>
              <HourGlassIcon />
            </button>
          </header>
          <div className={styles.eventServices}>
            <Link href="/">
              <SponsoringIcon />
              <span>
                Sponsoring an event
                <ArrowRightIcon className={styles.arrow} />
              </span>
            </Link>
            <Link href="/">
              <SpeakersSmallIcon />
              <span>
                Speaking at an event
                <ArrowRightIcon className={styles.arrow} />
              </span>
            </Link>
          </div>
          <div className={styles.yearListContainer}>
            {/* Year Selected */}
            <h3>March 2022</h3>
          </div>
          <ul className={styles.eventList}>
            <li>
              <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                  <Image src={balloons} alt="balloons" />
                </div>
                <span className={styles.date}>12</span>
                <div className={styles.warning}>
                  <span>
                    <ExclamationIcon />
                    <span>Need a speaker</span>
                  </span>
                  <span>
                    <ExclamationIcon />
                    <span>Need a sponsor</span>
                  </span>
                </div>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.time}>
                  <ClockIcon /> <span>07:30 AM</span>
                </div>
                <p>Terraform with Azure for absolute beginning for now</p>
                <div className={styles.attenders}>
                  <AvatarIcon /> <span>0</span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                  <Image src={balloons} alt="balloons" />
                </div>
                <span className={styles.date}>12</span>
                <div className={styles.warning}>
                  <span>
                    <ExclamationIcon />
                    <span>Need a speaker</span>
                  </span>
                  <span>
                    <ExclamationIcon />
                    <span>Need a sponsor</span>
                  </span>
                </div>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.time}>
                  <ClockIcon /> <span>07:30 AM</span>
                </div>
                <p>Terraform with Azure for absolute beginning for now</p>
                <div className={styles.attenders}>
                  <AvatarIcon /> <span>0</span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                  <Image src={balloons} alt="balloons" />
                </div>
                <span className={styles.date}>12</span>
                <div className={styles.warning}>
                  <span>
                    <ExclamationIcon />
                    <span>Need a speaker</span>
                  </span>
                  <span>
                    <ExclamationIcon />
                    <span>Need a sponsor</span>
                  </span>
                </div>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.time}>
                  <ClockIcon /> <span>07:30 AM</span>
                </div>
                <p>Terraform with Azure for absolute beginning for now</p>
                <div className={styles.attenders}>
                  <AvatarIcon /> <span>0</span>
                </div>
              </div>
            </li>
          </ul>
          {/* Past Events */}
          <h3>Past events</h3>
          <ul className={styles.eventList}>
            <li>
              <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                  <Image src={balloons} alt="balloons" />
                </div>
                <span className={styles.date}>12</span>
                <div className={styles.warning}>
                  <span>
                    <ExclamationIcon />
                    <span>Need a speaker</span>
                  </span>
                  <span>
                    <ExclamationIcon />
                    <span>Need a sponsor</span>
                  </span>
                </div>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.time}>
                  <ClockIcon /> <span>07:30 AM</span>
                </div>
                <p>Terraform with Azure for absolute beginning for now</p>
                <div className={styles.attenders}>
                  <AvatarIcon /> <span>0</span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                  <Image src={balloons} alt="balloons" />
                </div>
                <span className={styles.date}>12</span>
                <div className={styles.warning}>
                  <span>
                    <ExclamationIcon />
                    <span>Need a speaker</span>
                  </span>
                  <span>
                    <ExclamationIcon />
                    <span>Need a sponsor</span>
                  </span>
                </div>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.time}>
                  <ClockIcon /> <span>07:30 AM</span>
                </div>
                <p>Terraform with Azure for absolute beginning for now</p>
                <div className={styles.attenders}>
                  <AvatarIcon /> <span>0</span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                  <Image src={balloons} alt="balloons" />
                </div>
                <span className={styles.date}>12</span>
                <div className={styles.warning}>
                  <span>
                    <ExclamationIcon />
                    <span>Need a speaker</span>
                  </span>
                  <span>
                    <ExclamationIcon />
                    <span>Need a sponsor</span>
                  </span>
                </div>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.time}>
                  <ClockIcon /> <span>07:30 AM</span>
                </div>
                <p>Terraform with Azure for absolute beginning for now</p>
                <div className={styles.attenders}>
                  <AvatarIcon /> <span>0</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
