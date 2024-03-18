import Image from 'next/image';

import { balloons } from '@Images';
import Icon from '@Icons';
import styles from './styles.module.css';


function CurrentEvents() {
  return (
    <div>
      <h3>March 2022</h3>
      <ul className={styles.eventList}>
        <li>
          <div className={styles.imgContainer}>
            <div className={styles.imgWrapper}>
              <Image src={balloons} alt="balloons" />
            </div>
            <span className={styles.date}>12</span>
            <div className={styles.warning}>
              <span>
                {/* <ExclamationIcon /> */}
                <span>Need a speaker</span>
              </span>
              <span>
                {/* <ExclamationIcon /> */}
                <span>Need a sponsor</span>
              </span>
            </div>
          </div>
          <div className={styles.eventInfo}>
            <div className={styles.time}>
              {/* <ClockIcon /> <span>07:30 AM</span> */}
            </div>
            <p className={styles.title}>
              Terraform with Azure for absolute beginning for now
            </p>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, quaerat!
            </p>
            <div className={styles.attenders}>
              {/* <AvatarIcon /> <span>0</span> */}
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
                {/* <ExclamationIcon /> */}
                <span>Need a speaker</span>
              </span>
              <span>
                {/* <ExclamationIcon /> */}
                <span>Need a sponsor</span>
              </span>
            </div>
          </div>
          <div className={styles.eventInfo}>
            <div className={styles.time}>
              {/* <ClockIcon /> <span>07:30 AM</span> */}
            </div>
            <p className={styles.title}>
              Terraform with Azure for absolute beginning for now
            </p>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, quaerat!
            </p>
            <div className={styles.attenders}>
              {/* <AvatarIcon /> <span>0</span> */}
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
                {/* <ExclamationIcon /> */}
                <span>Need a speaker</span>
              </span>
              <span>
                {/* <ExclamationIcon /> */}
                <span>Need a sponsor</span>
              </span>
            </div>
          </div>
          <div className={styles.eventInfo}>
            <div className={styles.time}>
              {/* <ClockIcon /> <span>07:30 AM</span> */}
            </div>
            <p className={styles.title}>
              Terraform with Azure for absolute beginning for now
            </p>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, quaerat!
            </p>
            <div className={styles.attenders}>
              {/* <AvatarIcon /> <span>0</span> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}


export default CurrentEvents;
