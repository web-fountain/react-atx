import '@Styles/fonts.css';
import '@Styles/resets.css';
import '@Styles/base.css';
import '@Styles/layout.css';
import '@Styles/theme.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Footer, Header } from '@Components';

// import Provider from '../context/client-provider';
// import { auth } from '../../auth.Config';
// console.log('auth', auth);

async function RootLayout({ children }: { children: ReactNode }) {
  //   const session = await auth();
  //   console.log('root session', session);

  return (
    <html data-theme='dark' lang='en-US'>
      <head>
        {/* #Favicon.1 */}
        <link rel='icon' sizes='any' href='/favicon.ico' />
        <link rel='icon' type='image/svg+xml' href='/favicon/icon.svg' />
        <link rel='apple-touch-icon' href='/favicon/apple-touch-icon.png' />
        <link rel='manifest' href='favicon/manifest.webmanifest' />

        <style>@layer fonts, resets, base, layout, theme;</style>
      </head>
      <body>
        {/* <Provider session={session}> */}
        <Header />
        <main className='main-layout'>{children}</main>
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'React ATX'
};

export default RootLayout;
