import '@/styles/common/index.scss';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body id='root'>
        <Header />
        <main id='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
