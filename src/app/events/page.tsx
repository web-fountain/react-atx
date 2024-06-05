import styles from "./styles.module.css";
import EventLayout from "@/app/events/EventLayout";

const metadata = {
	title: "React ATX | Events",
};

function Events() {
	return (
		<main className="main-layout">
			<section className={styles.container}>{/* <EventLayout /> */}</section>
		</main>
	);
}

export { metadata };
export default Events;
