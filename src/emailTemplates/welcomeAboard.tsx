'use server';

import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

async function WelcomeAboardEmail({ email, token }) {
  console.info('WelcomeAboardEmail:email', email);

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM_TEST!,
      to: [email],
      subject: 'Welcome aboard to React ATX!',
      // react: <Template email={email} token={token} />
      react: Template({ email, token })
    });

    console.info('WelcomeAboardEmail:data', data);

    return data;
  } catch (error) {
    throw error;
  }
}

const Template = ({ email, token }) => {
  const url = `${process.env.VERCEL_URL}/verify-email?token=${token}`;
  // http://localhost:3000/?email=roberto.fuentes@webfountain.io&token=2ae8b0a7e252b19df9bfc265d20b3e68eb56a68f781c4db6b1d7cd09f7dfada4dcd0264e13eb8a5fd5e2257aff865ee9d5ba3c2fbbc7d4dc593122b9387a2cb5

  return (
    <main style={{ backgroundColor: 'red' }}>
      <h1>Welcome to React ATX!!</h1>

      <p>Please confirm your membership by clicking the member confirmation link below</p>

      <a href={`${url}`}>
        Confirm Membership
      </a>
    </main>
  );

};


export default WelcomeAboardEmail;
