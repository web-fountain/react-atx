import styles from './styles.module.css';

async function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles['middle-background-image']} />
      {children}
    </>
  );
}

export default layout;
