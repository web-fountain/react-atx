'use server';

import Ajv from 'ajv';
import type { ErrorObject } from 'ajv';
import ajvFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
import postgres from 'postgres';
import JoinFormSchema from './schema';

import welcomeAboard from '@/emailTemplates/welcomeAboard';


const ajv = new Ajv({ allErrors: true });
ajvFormats(ajv, ['email']);
ajvErrors(ajv);
const validate = ajv.compile(JoinFormSchema);

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

type Result = {
  success: boolean,
  errors: null | Partial<ErrorObject<string, Record<string, any>, unknown>>[]
};

async function joinEmail(prevState: Result, ajvData: any): Promise<Result> {
  console.log('ServerAction:prevState', prevState);
  console.log('ServerAction:ajvData', ajvData);

  try {
    await validate(ajvData);
  } catch (error) {
    if (!(error instanceof Ajv.ValidationError)) throw error;

    console.log('ServerAction:AJVerror', error.errors);

    return {
      success: false,
      errors: error.errors
    };
  }

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

  console.info(client);

  if (!client[0].isNewMember && client[0].isVerified) {
    // no need to send email
    // just return success and show welcome back message
    return {
      success: true,
      errors:[]
    };
  }

  if (!client[0].isNewMember && !client[0].isVerified) {
    // email in the database but not verified
    // send welcome aboard email to verify membership
    try {
      await sendEmail({ welcomeAboard, email, client[0].token });
    } catch (error) {
      console.error('ServerAction:sendEmailError', error);
      return {
        success: false,
        errors: [{server: { message: 'Server error' }}]
      };
    }
  }

  if (client[0].isNewMember) {
    try {
      await sendEmail({ welcomeAboard, email, client[0].token });
    } catch (error) {
      console.error('ServerAction:sendEmailError', error);
      return {
        success: false,
        errors: [{server: { message: 'Server error' }}]
      };
    }
  }

  return {
    success: true,
    errors: []
  };
}

//   revalidatePath('/');
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');


export default joinEmail;
