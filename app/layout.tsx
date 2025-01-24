import '@/styles/common/index.scss';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from '@/components/common/Providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body id='root'>
        <Providers>
          <Header />
          <main id='main'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
