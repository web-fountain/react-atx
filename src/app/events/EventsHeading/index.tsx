import styles from "./eventsHeading.module.css";
import Icon from "@Icons";
import React from "react";

interface Props {
	setShowYears: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EventsHeading({ setShowYears }: Props) {
	return (
		<div className={styles.heading}>
			<h3>Events</h3>
			<button
				type="button"
				className={styles.hourglassBtn}
				onClick={() => setShowYears((prev) => !prev)}
			>
				{/* <HourGlassIcon /> */}
			</button>
		</div>
	);
}
