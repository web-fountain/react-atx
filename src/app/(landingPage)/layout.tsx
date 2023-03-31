import '@Styles/global.css';
import '@Styles/base.css';
import '@Styles/fonts.css';
import '@Styles/resets.css';
import '@Styles/themes.css';
import '@Styles/layout.css';

import Header from '@Components/Header';
import Footer from '@Components/Footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body data-theme="light">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
