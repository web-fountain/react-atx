import Header from '@/components/UI/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* #Favicon.1 */}
      <link rel='icon' sizes='any' href='/favicon.ico' />
      <link rel='icon' type='image/svg+xml' href='/favicon/icon.svg' />
      <link rel='apple-touch-icon' href='/favicon/apple-touch-icon.png' />
      <link rel='manifest' href='favicon/manifest.webmanifest' />
      <body className='bg-background-color text-text-primary'>
        <Header />
        <main className='pt-[101px]'>{children}</main>
      </body>
    </html>
  );
}
