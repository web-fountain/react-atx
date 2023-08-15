import * as React from 'react';


interface EmailTemplateProps {
  firstName: string;
}

function EmailTemplate({ firstName }: Readonly<EmailTemplateProps>): React.ReactNode {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}


export default EmailTemplate;
