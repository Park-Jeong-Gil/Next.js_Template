'use client';

import { create } from 'zustand';
import { useEffect } from 'react';

interface DeviceStore {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}

const useDeviceStore = create<DeviceStore>((set) => ({
  isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  setIsMobile: (value) => set({ isMobile: value }),
}));

export function useDeviceDetector() {
  const { isMobile, setIsMobile } = useDeviceStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  return isMobile;
}
