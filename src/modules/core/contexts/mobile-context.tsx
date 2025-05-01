'use client';

import { UIConstant } from '@/lib/constants';
import React, { createContext, useContext, ReactNode } from 'react';
import { useMediaQuery } from 'usehooks-ts';

interface MobileContextType {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

export function MobileProvider({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery(`(max-width: ${UIConstant.MAX_MOBILE_WIDTH}px)`);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
}

export function useMobileContext() {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobileContext must be used within a MobileProvider');
  }
  return context;
} 