'use client';

import { UIConstant } from '@/lib/constants';
import React, { FC, PropsWithChildren } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
    const matches = useMediaQuery(`(max-width: ${UIConstant.MAX_MOBILE_WIDTH}px)`)

  if (matches) return <>{children}</>;

  return <div className='flex items-center justify-center h-screen w-full bg-black'>
    <h1 className='text-2xl font-bold'>
    my guy… please exit full screen
    </h1>
  </div>
};