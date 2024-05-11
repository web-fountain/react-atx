"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
async function WelcomeAboardEmail({ email, token }) {
	console.group("EmailTemplate -- WelcomeAboardEmail");
	console.info({ email });

	try {
		const data = await resend.emails.send({
			from: process.env.EMAIL_FROM_TEST!,
			to: [email],
			subject: "Welcome aboard to React ATX!",
			// react: <Template email={email} token={token} />
			react: Template({ email, token }),
		});

		console.info(data);
		console.groupEnd();

		return data;
	} catch (error) {
		throw error;
	}
}

const Template = ({ email, token }) => {
	const url = `${process.env.VERCEL_URL}/verify-email?token=${token}`;

	return (
		<main style={{ backgroundColor: "red" }}>
			<h1>Welcome to React ATX!!</h1>

			<p>
				Please confirm your membership by clicking the member confirmation link
				below
			</p>

			<a href={`${url}`}>Confirm Membership</a>
		</main>
	);
};

export default WelcomeAboardEmail;
