import CommunityItem from '../CommunityItem';
import { OurGoalIcon, WhatWeDoIcon, WhatWeUseIcon } from '../../../components/Icons';
import styles from './community.module.css';


export default function Community() {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <h2>About our Community</h2>
        <p>
          React ATX is a Community-Driven frontend development group that
          converges on the ReactJS ecosystem.
        </p>
        <p>
          We meet once a month to discuss topics that range from state
          management, CSS tooling, serverless, TypeScript, frameworks, deploying
          to production and much more.
        </p>
        <p>
          All skill sets are welcome! Whether you are new to react or a seasoned
          frontend developer we encourage you to attend and learn, teach, and
          share with the React ATX community.
        </p>
        <p>
          We partner with sponsors to help promote their business and recruit
          talent. Reach out to info@reactatx.org for more sponsorship
          information.
        </p>
      </div>
      <ul className={styles.list}>
        <CommunityItem
          title="What we do?"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis omnis optio nisi soluta, quae eaque at cupiditate aliquam quasi voluptatum!"
        >
          <WhatWeDoIcon />
        </CommunityItem>
        <CommunityItem
          title="What is the goal?"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis omnis optio nisi soluta, quae eaque at cupiditate aliquam quasi voluptatum!"
        >
          <OurGoalIcon />
        </CommunityItem>
        <CommunityItem
          title="What We Use?"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis omnis optio nisi soluta, quae eaque at cupiditate aliquam quasi voluptatum!"
        >
          <WhatWeUseIcon />
        </CommunityItem>
      </ul>
    </section>
  );
}
