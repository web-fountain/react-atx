import styles from './eventYears.module.css';


export default function EventDates({ showYears }: { showYears: boolean }) {
  const currentYear = new Date().getFullYear();
  return (
    <aside className={`${styles.years} ${showYears && styles.showYears}`}>
      <h3>{currentYear}</h3>
      <ul className={styles.monthsList}>
        <li>
          <button type="button" className={styles.monthBtn}>
            January
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            February
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            March
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            April
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            May
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            June
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            July
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            August
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            September
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            October
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            November
          </button>
        </li>
        <li>
          <button type="button" className={styles.monthBtn}>
            December
          </button>
        </li>
      </ul>
      <h3>Past years</h3>
      <ul className={styles.yearsList}>
        <li>
          <button type="button" className={styles.yearBtn}>
            2022
          </button>
        </li>
        <li>
          <button type="button" className={styles.yearBtn}>
            2021
          </button>
        </li>
        <li>
          <button type="button" className={styles.yearBtn}>
            2020
          </button>
        </li>
      </ul>
    </aside>
  );
}
