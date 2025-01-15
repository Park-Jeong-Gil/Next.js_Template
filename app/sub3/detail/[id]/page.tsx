import { getPhotoItem } from '@/api/post';
import type { Metadata } from 'next';
import Image from 'next/image';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// 동적 메타데이터 생성
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  const photo = await getPhotoItem(id);

  return {
    title: `Next Base - ${photo[0]?.title || 'Detail'}`,
    description: `Photo detail page - ${photo[0]?.title || 'Not found'}`,
    openGraph: {
      title: `Next Base - ${photo[0]?.title || 'Detail'}`,
      description: `Photo detail page - ${photo[0]?.title || 'Not found'}`,
      images: [
        {
          url: photo[0]?.url || 'https://example.com/og.png',
        },
      ],
    },
  };
}

export default async function Detail({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    // params 타입 안전성 확보
    const id = Number(resolvedParams.id);
    if (isNaN(id)) {
      throw new Error('Invalid ID');
    }

    const photo = await getPhotoItem(id);

    const photoData = {
      title: photo[0].title,
      url: photo[0].thumbnailUrl.replace(
        /via\.placeholder\.com\/\d+\/[a-zA-Z0-9]+/,
        `picsum.photos/seed/${Math.floor(Math.random() * 100)}/200`,
      ),
    };

    if (!photo || photo.length === 0) {
      throw new Error('Photo not found');
    }

    return (
      <div>
        <h1>{photoData.title}</h1>
        <Image
          src={photoData.url}
          alt={photoData.title}
          width={150}
          height={150}
          quality={75}
          loading='lazy'
        />
      </div>
    );
  } catch (error) {
    // 에러 처리
    return (
      <div>
        <h1>Error</h1>
        <p>
          {error instanceof Error ? error.message : 'Unknown error occurred'}
        </p>
      </div>
    );
  }
}
