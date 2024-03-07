'use server';

import { cache } from 'react';

import Ajv from 'ajv';
import type { ErrorObject } from 'ajv';
import ajvFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
import postgres from 'postgres';
import JoinFormSchema from './schema';

import WelcomeAboardEmail from '@/emailTemplates/welcomeAboard';


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
  const { email } = ajvData;

  console.log('ServerAction:prevState', prevState);
  console.log('ServerAction:ajvData', ajvData);

  try {
    await validate({ email });
  } catch (error) {
    if (!(error instanceof Ajv.ValidationError)) throw error;

    console.log('ServerAction:AJVerror', error.errors);

    return {
      success: false,
      errors: error.errors
    };
  }

  const { isNewMember, isVerified, token } = await getJoinEmail(email);

  console.info('ServerAction:data', { isNewMember, isVerified });

  if (!isNewMember && isVerified) {
    // no need to send email
    // just return success and show welcome back message
    console.info('ServerAction:emailAlreadyVerified');
    return {
      success: true,
      errors:[]
    };
  }

  if (!isNewMember && !isVerified) {
    // email in the database but not verified
    // send welcome aboard email to verify membership
    console.info('ServerAction:sendEmailToVerifyMembership');
    try {
      const { data } = await WelcomeAboardEmail({ email, token });

      if (!data) {
        return {
          success: false,
          errors: [{ server: { message: 'Server error' }}]
        };
      }
    } catch (error) {
      console.error('ServerAction:sendEmailToVerifyMembershipError', error);
      return {
        success: false,
        errors: [{server: { message: 'Server error' }}]
      };
    }
  }

  if (isNewMember) {
    console.info('ServerAction:sendEmailToJoin');
    try {
      const { data } = await WelcomeAboardEmail({ email, token });

      if (!data) {
        return {
          success: false,
          errors: [{ server: { message: 'Server error' }}]
        };
      }
    } catch (error) {
      console.error('ServerAction:sendEmailToJoinError', error);
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

const getJoinEmail = cache(async (email: string) => {
  try {
    const data = await sql`
      SELECT
        is_verified    AS "isVerified",
        is_new_member  AS "isNewMember",
        token          AS "token",
        expires_at     AS "expiresAt"
      FROM join_member(${ email });
    `;
    return data[0];
  } catch (error) {
    console.error('ServerAction:SQLerror', error);
    return {
      success: false,
      errors: [{server: { message: 'Server error' }}]
    };
  }
});

//   revalidatePath('/');
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');

export default joinEmail;
