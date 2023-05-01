import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='font-poppins'>
      <body className=''>{children}</body>
    </html>
  );
}
