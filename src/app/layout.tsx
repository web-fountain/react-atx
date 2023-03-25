import './styles/global.css';
import './styles/base.css';
import './styles/fonts.css';
import './styles/resets.css';
import './styles/themes.css';
import './styles/layout.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
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
