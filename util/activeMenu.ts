'use client';
import { usePathname } from 'next/navigation';
import { navigation } from '@/constants/navigations';

export const useActiveMainMenu = () => {
  const pathname = usePathname();

  return navigation.find((nav) => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const navPathSegments = nav.path.split('/').filter(Boolean);

    return pathSegments[0] === navPathSegments[0];
  });
};
