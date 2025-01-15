import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Base',
  description: 'next dev base',
  keywords: 'next, base, dev',
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'My Website',
    description: 'My Website Description',
    siteName: 'My Website',
    images: [
      {
        url: 'https://example.com/og.png',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <section id='container'>
        <h2>Main page</h2>
        <p>Main page content</p>
      </section>
    </>
  );
}
