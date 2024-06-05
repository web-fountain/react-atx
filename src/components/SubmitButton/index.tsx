"use client";
import styles from "./styles.module.css";

interface Props {
	className?: string;
	disabled?: boolean;
	formId?: string;
	label: string;
	style?: Record<string, string>;
}

function SubmitButton({
	className = "",
	disabled = false,
	formId = "",
	label = "submit",
	style = {},
}: Props) {
	return (
		<button
			style={style}
			form={formId}
			type="submit"
			disabled={disabled}
			aria-disabled={disabled}
			className={`${styles["button"]} ${className}`}
		>
			{label}
		</button>
	);
}

export default SubmitButton;
