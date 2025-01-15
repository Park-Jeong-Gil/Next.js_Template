'use client';

import Link from 'next/link';
import { MenuItem } from '@/types/MenuItem';

export default function MobileLnb({
  activeMainMenu,
}: {
  activeMainMenu: MenuItem;
}) {
  return (
    <>
      <h3>Mo lnb list</h3>
      <ul className='depth2'>
        {activeMainMenu?.children?.map((child) => (
          <li key={child.label}>
            <Link href={`${activeMainMenu?.path}/${child.path}`}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
