import { ArrowRightIcon, BulbIcon, ReactMediumLogo, SlackIcon } from "../Icons"
import styles from "./join.module.css"

export default function Join() {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.top} />
        <div className={styles.main}>
          <ReactMediumLogo className={styles.reactCornerSvg} />
          <div>
            <h2>Join the Community</h2>
            <p>Subscribe to monthly meetup events.</p>
          </div>
          <form className={styles.form}>
            <input
              type="text"
              className={styles.input}
              placeholder="example@mail.com"
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe <ArrowRightIcon className={styles.arrow} />
            </button>
          </form>
        </div>
        <div className={styles.bottom} />
        <div className={styles.reactQuestions}>
          <div className={styles.bulb}>
            <BulbIcon />
          </div>
          <div className={styles.text}>
            <p>
              Have ReactJS questions? Seeking resources? Want to help others?
              Join our Slack group!
            </p>
          </div>
          <div className={styles.slackLink}>
            <a
              href="https://slack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Slack
            </a>
            <SlackIcon />
          </div>
        </div>
      </div>
    </section>
  )
}
