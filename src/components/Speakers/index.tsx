import { ArrowRightIcon } from "../Icons"
import styles from "./speakers.module.css"

export default function Speakers() {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <h2>Speakers</h2>
        <p>Interested in speaking at our next event?</p>
        <p>Please fill out the form below</p>
      </div>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.inputBlock}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="job-title">Job Title</label>
            <input type="text" placeholder="Job Title" id="job-title" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" id="email" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="company">Company</label>
            <input type="text" placeholder="Company" id="company" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="topic">Topic</label>
            <input type="text" placeholder="Topic" id="topic" />
          </div>
        </div>
        <h3>How Would you like to present your topic?</h3>
        <small>You can choose only one of the options</small>
        <div className={styles.checks}>
          <div className={styles.checkBlock}>
            <input type="checkbox" name="showcase" id="showcase" />
            <label htmlFor="showcase">Showcase</label>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </div>
          <div className={styles.checkBlock}>
            <input type="checkbox" name="instructional" id="instructional" />
            <label htmlFor="instructional">Instructional</label>
            <p>
              Step by step instructions with credible references that link back
              to best practices, using some live code or photos of your code to
              give context.
            </p>
          </div>
          <div className={styles.checkBlock}>
            <input type="checkbox" name="showcase" id="showcase" />
            <label htmlFor="showcase">Showcase</label>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </div>
          <div className={styles.checkBlock}>
            <input type="checkbox" name="showcase" id="showcase" />
            <label htmlFor="showcase">Showcase</label>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </div>
          <div className={styles.checkBlock}>
            <input type="checkbox" name="showcase" id="showcase" />
            <label htmlFor="showcase">Showcase</label>
            <p>
              Information on current projects or tools and must include photos
              of code or do some live coding.
            </p>
          </div>
          <button type="submit" className={styles.btn}>
            <div className={styles.btnInnerBox}>
              <span className={styles.btnText}>
                Submit <ArrowRightIcon className={styles.arrow} />
              </span>
            </div>
          </button>
        </div>
      </form>
    </section>
  )
}
