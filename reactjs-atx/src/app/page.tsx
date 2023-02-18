import React from "react"
import LinkButton from "../components/LinkButton"
import Speakers from "../components/Speakers"
import styles from "./page.module.css"
import {
  ArrowRightIcon,
  WhatWeDoIcon,
  WhatWeUseIcon,
  OurGoalIcon,
  ReactLogoLarge,
} from "../components/Icons"

export default function Home() {
  return (
    <main className={styles.mainLayout}>
      <section className={styles.hero}>
        <div className={styles.intro}>
          <h1>React ATX</h1>
          <h2>
            Join Austin&apos;s
            <br />
            React Community
          </h2>
          <p>
            We&apos;re a community of developers that come together to learn,
            share, and explore the world of frontend with ReactJS.
          </p>
          <LinkButton href="/" text="Join now" />
        </div>
        <ReactLogoLarge />
      </section>
      <section className={styles.community}>
        <div className={styles.container}>
          <h2>About our Community</h2>
          <p>
            React ATX is a Community-Driven frontend development group that
            converges on the ReactJS ecosystem.
          </p>
          <p>
            We meet once a month to discuss topics that range from state
            management, CSS tooling, serverless, TypeScript, frameworks,
            deploying to production and much more.
          </p>
          <p>
            All skill sets are welcome! Whether you are new to react or a
            seasoned frontend developer we encourage you to attend and learn,
            teach, and share with the React ATX community.
          </p>
          <p>
            We partner with sponsors to help promote their business and recruit
            talent. Reach out to info@reactatx.org for more sponsorship
            information.
          </p>
        </div>
        <ul className={styles.communityList}>
          <li>
            <WhatWeDoIcon />
            <h4 className={styles.title}>What do we do?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nam reiciendis incidunt inventore voluptas ad dolorem,
              reprehenderit adipisci nostrum ex!
            </p>
            <button type="button">Show Less</button>
          </li>
          <li>
            <OurGoalIcon />
            <h4 className={styles.title}>What is the goal?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nam reiciendis incidunt inventore voluptas ad dolorem,
              reprehenderit adipisci nostrum ex!
            </p>
            <button type="button">Show Less</button>
          </li>
          <li>
            <WhatWeUseIcon />
            <h4 className={styles.title}>What We Use?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nam reiciendis incidunt inventore voluptas ad dolorem,
              reprehenderit adipisci nostrum ex!
            </p>
            <button type="button">Show Less</button>
          </li>
        </ul>
      </section>
      {/* Join Section */}
      <section className={styles.join}>
        <div className={styles.communityContainer}>
          <div className={styles.joinTop} />
          <div className={styles.joinMain}>
            <h2>Join the Community</h2>
            <p>Subscribe to monthly meetup events.</p>
            <form id="joinForm" className={styles.joinForm}>
              <input type="text" placeholder="example@mail.com" />
              <button type="submit">
                Subscribe <ArrowRightIcon stroke="var(--primary-color" />
              </button>
            </form>
          </div>
          <div className={styles.joinBottom} />
          <div className={styles.reactQuestions}>
            <p>
              Have ReactJS questions? Seeking resources? Want to help others?
              Join our Slack group!
            </p>
            <button type="button">Open Slack</button>
          </div>
        </div>
      </section>
      <Speakers />
      <section className={styles.partnerships}></section>
      <section className={styles.aboutUs}></section>
    </main>
  )
}
