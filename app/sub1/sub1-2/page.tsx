import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Base - Sub1',
  description: 'next dev base - Sub1',
  keywords: 'next, base, dev, Sub1',
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'Next Base - Sub1',
    description: 'Next Base - Sub1 Description',
    siteName: 'Next Base - Sub1',
    images: [
      {
        url: 'https://example.com/og.png',
      },
    ],
  },
};

export default function Sub1_2() {
  return (
    <>
      <p>Sub-1 | 1-2 page content</p>
    </>
  );
}
