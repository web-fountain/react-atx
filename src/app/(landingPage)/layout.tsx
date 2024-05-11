import styles from "./styles.module.css";

async function layout({ children }) {
	return (
		<>
			<div className={styles["middle-background-image"]} />
			{children}
		</>
	);
}

export default layout;
