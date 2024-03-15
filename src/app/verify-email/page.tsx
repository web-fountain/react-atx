'use server';

import { cache, Suspense } from 'react';
import { redirect } from 'next/navigation';

import Loading from './loading';
import './styles.css';

import postgres from 'postgres';


const sql = postgres({
  host: process.env.POSTGRES_HOST!,
  user: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DATABASE!,
  max: 20,
  idle_timeout: 30,
  connect_timeout: 30,
//   ssl: true
  debug: (connection, query, params, type) => {
    console.log('connection', { connection });
    console.log('query', { query });
    console.log('params', { params });
    console.log('type', { type });
  }
});


async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'React ATX | Confirm Membership'
  };
}

async function Page({ searchParams }) {
  const { token } = searchParams;

  console.info('ConfirmMembership:token', { token });

  if (!token || token.length !== 128) {
    console.warn('Invalid token', { token });
    return (
      <main className="main-layout">
        <section>
          <InvalidToken />
        </section>
      </main>
    );
  }

  return (
    <main className="main-layout">
      <section>
        <Suspense fallback={ <Loading /> }>
          <ConfirmMembership token={token} />
        </Suspense>
      </section>
    </main>
  );
}

const ConfirmMembership = async ({ token }) => {
  console.info('ConfirmMembership');

  const { isValid } = await getValidation(token);
  console.info('ConfirmMembership:isValid', { isValid });

  redirect('/membership-confirmation');

  if (!isValid) return <Invalid />;

  return (
    <>
      <h1>Membership Confirmation</h1>
      <p>Welcome aboard!</p>
      <p>Thank you for confirming your membership to React ATX!</p>
    </>
  );
};

const Invalid = () => {
  return (
    <>
      <h1>Membership Confirmation</h1>
      <p>Unable to confirm membership</p>
      <p>Please sign up again</p>
    </>
  );
};

const getValidation = cache(async (token: string) => {
  console.info('ConfirmMembership:getValidation:token', { token });

  try {
    const data = await sql`
      SELECT is_valid  AS "isValid"
      FROM validate_magic_link_token(${token});
    `;
    console.info('ConfirmMembership:getValidation:data', { data });
    return data[0];
  } catch (error) {
    console.error('ConfirmMembership:getValidation:error', error);
    throw error;
  }
});


export { generateMetadata };
export default Page;
