'use client';

import { useEffect, useState } from 'react';
import { useActiveMainMenu } from '@/util/activeMenu';
import { useMediaQuery } from '@/hooks/useSizeDetect';
import { pagesType } from '@/constants/navigations';
import { MenuItem } from '@/types/MenuItem';

import DesktopLnb from '@/components/common/DesktopLnb';
import MobileLnb from '@/components/common/MobileLnb';

import '@/styles/components/Lnb.scss';

export default function SideNav() {
  const [activeMainMenu, setActiveMainMenu] = useState<pagesType | null>(null);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const currentActiveMenu = useActiveMainMenu();

  useEffect(() => {
    setActiveMainMenu(currentActiveMenu || null);
  }, [currentActiveMenu]);

  if (!activeMainMenu?.children || !activeMainMenu.label) {
    return null;
  }

  return (
    <nav className='lnb_nav'>
      {isMobile ? (
        <MobileLnb activeMainMenu={activeMainMenu as MenuItem} />
      ) : (
        <DesktopLnb activeMainMenu={activeMainMenu as MenuItem} />
      )}
    </nav>
  );
}
