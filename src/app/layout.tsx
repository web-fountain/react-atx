import Header from '@/components/UI/Header';
import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-background-color text-text-primary'>
        <Header />
        <main className='pt-[101px]'>{children}</main>
      </body>
    </html>
  );
}
