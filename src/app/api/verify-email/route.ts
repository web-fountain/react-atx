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

async function GET(request: Request, context: { params }) {
  const { token } = context.params;

  let client;
  try {
    client = await sql`
      SELECT
        isVerified,
        isNewMember,
        token,
        expiresAt
      FROM join_member(${ ajvData.email });
    `;
  } catch (error) {
    console.error('ServerAction:SQLerror', error);
    return {
      success: false,
      errors: [{server: { message: 'Server error' }}]
    };
  }


  return new Response('Thank you for verifying your email.');
}


export { GET };

