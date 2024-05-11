import Link from "next/link";

function NotFound() {
	return (
		<div>
			<h1>Not Found</h1>
			<p>
				Go back <Link href="/">Home</Link>
			</p>
		</div>
	);
}

export default NotFound;
