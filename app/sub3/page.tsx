import type { Metadata } from 'next';
import List from '@/components/sub3/List';
import Providers from '@/components/common/Providers';
import { getPhotoList } from '@/api/post';

export const metadata: Metadata = {
  title: 'Next Base - Sub3',
  description: 'next dev base - Sub3',
  keywords: 'next, base, dev, Sub3',
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'Next Base - Sub3',
    description: 'Next Base - Sub3 Description',
    siteName: 'Next Base - Sub3',
    images: [
      {
        url: 'https://example.com/og.png',
      },
    ],
  },
};

export default async function Sub3() {
  // 서버 컴포넌트에서 데이터 페칭
  const photos = await getPhotoList(1);

  return (
    <Providers>
      <p>Sub-3 page content</p>
      <List initialData={photos} />
    </Providers>
  );
}
