import "@Styles/mediaQueries.css";
import "@Styles/base.css";
import "@Styles/typography.css";
import "@Styles/layouts.css";
import "@Styles/themes.css";
import "@Styles/utilities.css";

import Sprites from "@Components/Sprites";
import { Footer, Header } from "@Components";

async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="dark" suppressHydrationWarning>
			<head>
				{/* #Favicon.1 */}
				<link rel="icon" sizes="any" href="/favicon.ico" />
				<link rel="icon" type="image/svg+xml" href="/favicon/icon.svg" />
				<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
				<link rel="manifest" href="/favicon/manifest.webmanifest" />

				<style>
					@layer fonts, typography, base, layouts, themes, utilities;
				</style>
			</head>

			<body>
				<Sprites />

				<div className="top-background-image" />
				<Header />

				<main className="main-layout">{children}</main>

				<Footer />
				<div className="bottom-background-image" />
			</body>
		</html>
	);
}

export default RootLayout;
