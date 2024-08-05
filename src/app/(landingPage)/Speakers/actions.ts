'use server';

import { cache } from 'react';
import postgres from 'postgres';

import WelcomeAboardEmail from '@EmailTemplates/welcomeAboard';
import joinFormSchema from './schema';

const connectionString = process.env.POSTGRES_URL!;
const sql = postgres(connectionString, {
  max: 10,
  idle_timeout: 30,       // close idle connection after 30 seconds
  max_lifetime: 60 * 15,  // close connection after 15 minutes
  connect_timeout: 30,
  connection: {
    application_name: 'nextjs_react_atx'
  },
  debug: (connection, query, params, type) => {
    console.log('connection', { connection });
    console.log('query', { query });
    console.log('params', { params });
    console.log('type', { type });
  }
});

type Result = {
  success: boolean;
  errors?: null | Record<string, { message: string }>;
  data?: unknown;
};

type Row = {
  isVerified: boolean;
  isNewMember: boolean;
  token: string;
  expiresAt: string;
};


const getJoinEmail = cache(async (email: string): Promise<Row | any> => {
  try {
    const data = await sql`
      SELECT
        is_verified    AS "isVerified",
        is_new_member  AS "isNewMember",
        token          AS "token",
        expires_at     AS "expiresAt"
      FROM join_member(${ email });
    `;

    return data[0] as Row;
  }
  catch (error) {
    console.error('ServerAction:SQLerror', error);
    return { error };
  }
});

async function addSpeaker(prevState: Result, formData: FormData): Promise<Result> {
  console.group('ServerAction -- joinEmail');
  const email = formData.get('email') as string;

  const validationErrors = {};
  const validation = joinFormSchema.safeParse({ email });

  if (!validation.success) {
    for (const issue of validation.error.issues) {
      const { path, message } = issue;
      validationErrors[path[0]] = { message };
    }

    console.warn({ validationErrors });
    return {
      success: false,
      errors: validationErrors
    };
  }

  const { isNewMember, isVerified, token, error } = await getJoinEmail(email);

  if (error) {
    return {
      success: false,
      errors: { server: { message: 'Server error' } }
    };
  }

  console.info({ isNewMember, isVerified });

  if (!isNewMember && isVerified) {
    // no need to send email
    // just return success and show welcome back message
    console.info('email already verified');
    return { success: true, data: { email }};
  }

  if (!isNewMember && !isVerified) {
    // email in the database but not verified
    // send welcome aboard email to verify membership
    console.info('send email to verify membership');
    try {
      const { data, error } = await WelcomeAboardEmail({ email, token });

      if (error) {
        console.warn('something went wrong with Resend', error);
        return {
          success: false,
          errors: { server: { message: 'Server error' }}
        };
      }
    } catch (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        errors: { server: { message: 'Server error' }}
      };
    }
  }

  if (isNewMember) {
    console.info('send email to join');
    try {
      const { data, error } = await WelcomeAboardEmail({ email, token });

      if (error) {
        console.warn('something went wrong with Resend', error);
        return {
          success: false,
          errors: { server: { message: 'Server error' }}
        };
      }
    } catch (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        errors: { server: { message: 'Server error' }}
      };
    }
  }

  console.groupEnd();
  return { success: true, data: { email }};
}


export default addSpeaker;
