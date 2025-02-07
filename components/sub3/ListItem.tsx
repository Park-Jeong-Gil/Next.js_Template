'use client';

import { Photo } from '@/api/post';
import Link from 'next/link';
import Image from 'next/image';

export default function ListItem({ listInfo }: { listInfo: Photo }) {
  // 이미지 시드값을 ID를 기반으로 고정
  const imageSeed = listInfo.id;

  return (
    <li className='photo-item'>
      <Link href={`/sub3/detail/${listInfo.id}`}>
        <Image
          src={`https://picsum.photos/seed/${imageSeed}/200`}
          alt={listInfo.title}
          width={150}
          height={150}
          quality={75}
          loading='lazy'
        />
        <strong>{listInfo.title}</strong>
      </Link>
    </li>
  );
}
