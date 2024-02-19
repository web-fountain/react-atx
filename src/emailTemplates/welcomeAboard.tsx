import * as React from 'react';


function WelcomeAboard({ email, token }) {
  const url = process.env.VERCEL_URL + `?email=${email}&token=${token}`;
  return (
    <main>
      <h1>Welcome to React ATX!!</h1>

      <p>Please confirm your membership by clicking the Member Confirmation button below</p>

      <a href={`${url}`}>
        Confirm Membership
      </a>
    </main>
  );
}


export default WelcomeAboard;
