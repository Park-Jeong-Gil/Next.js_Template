import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Base - Sub2',
  description: 'next dev base - Sub2',
  keywords: 'next, base, dev, Sub2',
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'Next Base - Sub2',
    description: 'Next Base - Sub2 Description',
    siteName: 'Next Base - Sub2',
    images: [
      {
        url: 'https://example.com/og.png',
      },
    ],
  },
};

export default function Sub2_2() {
  return (
    <>
      <p>Sub-2 | 2-2 page content</p>
    </>
  );
}
