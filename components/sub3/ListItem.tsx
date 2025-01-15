import { Photo } from '@/api/post';
import Link from 'next/link';
import Image from 'next/image';

export default function ListItem({ listInfo }: { listInfo: Photo }) {
  return (
    <li>
      <Link href={`/sub3/detail/${listInfo.id}`}>
        <Image
          src={listInfo.thumbnailUrl}
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
