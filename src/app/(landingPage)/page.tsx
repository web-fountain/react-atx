import Hero from "./Hero";
import Community from "./Community";
import Join from "./Join";
import Speakers from "./Speakers";
import Partnerships from "./Partnerships";
import AboutUs from "./AboutUs";

async function Page() {
	return (
		<>
			<title>React ATX | Home</title>
			<Hero />
			<Community />
			<Join />
			<Partnerships />
			<Speakers />
			<AboutUs />
		</>
	);
}

export default Page;
