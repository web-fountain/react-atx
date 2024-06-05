"use server";

import { cache, Suspense } from "react";
import Link from "next/link";

import Loading from "./loading";
import styles from "./styles.module.css";

import postgres from "postgres";

const connectionString = process.env.POSTGRES_URL!;
const sql = postgres(connectionString, {
	max: 10,
	idle_timeout: 30, // close idle connection after 30 seconds
	max_lifetime: 60 * 15, // close connection after 15 minutes
	connect_timeout: 30,
	connection: {
		application_name: "nextjs_react_atx",
	},
	debug: (connection, query, params, type) => {
		console.log("connection", { connection });
		console.log("query", { query });
		console.log("params", { params });
		console.log("type", { type });
	},
});

async function Page({ searchParams }) {
	const { token } = searchParams;

	console.info("ConfirmMembership:token", { token });

	return (
		<>
			<title>React ATX | Confirm Membership</title>
			<section id="verify-email" className={styles["layout"]}>
				{!token || token.length !== 128 ? (
					<InvalidToken />
				) : (
					<Suspense fallback={<Loading />}>
						<ConfirmMembership token={token} />
					</Suspense>
				)}
			</section>
		</>
	);
}

const ConfirmMembership = async ({ token }: { token: string }) => {
	console.info("ConfirmMembership");

	const { isValid } = await getValidation(token);
	console.info("ConfirmMembership:isValid", { isValid });

	if (!isValid) return <InvalidToken />;

	return (
		<>
			<h1>Membership Confirmation</h1>
			<h2>Welcome aboard!</h2>
			<h3>Thank you for confirming your membership to React ATX!</h3>
			<h3>Keep an eye out for our newsletter!</h3>
		</>
	);
};

const InvalidToken = () => {
	return (
		<>
			<h1>Membership Confirmation</h1>
			<h2>Token Invalid</h2>
			<h3>
				<Link href="/#join">Please sign up again!</Link>
			</h3>
		</>
	);
};

type Row = {
	isValid: boolean;
};

const getValidation = cache(async (token: string) => {
	console.info("ConfirmMembership:getValidation:token", { token });

	try {
		const data = await sql`
      SELECT is_valid  AS "isValid"
      FROM validate_magic_link_token(${token});
    `;
		console.info("ConfirmMembership:getValidation:data", { data });
		return data[0] as Row;
	} catch (error) {
		console.error("ConfirmMembership:getValidation:error", error);
		throw error;
	}
});

export default Page;
