import styles from './styles.module.css';


function Community() {
  return (
    <section id='community' className={styles.container}>
      <div className={styles.intro}>
        <h3>About our Community</h3>
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
    </section>
  );
}


export default Community;
