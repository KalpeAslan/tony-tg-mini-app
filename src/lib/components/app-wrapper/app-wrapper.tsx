'use client';

import { UIConstant } from '@/lib/constants';
import React, { FC, PropsWithChildren } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
    const matches = useMediaQuery(`(max-width: ${UIConstant.MAX_MOBILE_WIDTH}px)`)

  if (matches) return <>{children}</>;

  return (
    <div className={'flex items-center justify-center h-screen'}>
        <video
          src="/loader.MP4"
          className={'absolute top-0 left-0 w-full h-full object-cover'}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
      <div className={'relative w-[390px] h-full overflow-hidden border-white-translucent rounded-lg'}>
        {children}
      </div>
    </div>
  );
};