function Moon({ className = "", fill = "" }) {
	const inlineFill = fill.length === 0 ? { fill: "#FFFFFF" } : { fill };

	return (
		<svg className={className} width="15" height="16" viewBox="0 0 70 71">
			<path
				style={inlineFill}
				d="M35.36,3.87 C27.67,8.32 22.49,16.64 22.49,26.17 C22.49,40.39 34.02,51.92 48.24,51.92 C54.99,51.92 61.14,49.32 65.73,45.07 C68.01,42.96 70.62,44.5 69.74,47.01 C64.93,60.83 51.79,70.74 36.33,70.74 C16.79,70.74 0.95,54.9 0.95,35.36 C0.95,16.64 15.56,1.26 34.05,0.13 C37.47,-0.07 38.35,2.14 35.36,3.87 L35.36,3.87 Z"
			/>
		</svg>
	);
}

export default Moon;
