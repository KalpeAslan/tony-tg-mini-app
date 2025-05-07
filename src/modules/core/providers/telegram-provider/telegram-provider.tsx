'use client';

import { FC, type PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { init } from './init';
import { useTelegramMock } from './use-telegram-mock';
import { useClientOnce } from '@/hooks/use-client-once';
import { useDidMount } from '@/hooks/use-did-mount';
import TonConnect from '@tonconnect/sdk';
import { appConfig } from '@/configs/app.config';
import { storageService } from '@/modules/core/repository';
import { useSearchParams } from 'next/navigation';
import { coreConstants } from '../../constants';

const Root: FC<PropsWithChildren> = ({ children }) => {
  const tonConnectRef = useRef<TonConnect | null>(null);
  const searchParams = useSearchParams();
  const initDataRaw = searchParams.get(coreConstants.keys.initDataRaw) || storageService.getTelegramMockedData();
  const accessToken = searchParams.get(coreConstants.keys.accessToken) || storageService.getAccessToken();
  const isTelegramMocked = initDataRaw || storageService.getIsTelegramMocked();
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    if (initDataRaw) {
      // from query params
      storageService.setTelegramMockedData(initDataRaw);
    }
    if (accessToken) {
      storageService.setAccessToken(accessToken);
    }
  }, [initDataRaw, accessToken]);

  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock({
      devMock: true,
    });
  } else if (isTelegramMocked) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock({
      devMock: false,
      initDataRaw: initDataRaw || undefined,
    });
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === 'debug';
  const isIOS = lp.platform === 'ios';

  // Initialize the library.
  useClientOnce(() => {
    init(debug);

    // Initialize TonConnect only for non-iOS platforms
    if (!isIOS && !tonConnectRef.current) {
      tonConnectRef.current = new TonConnect({
        manifestUrl: 'https://tony.it.com/tonconnect-manifest.json',
      });
      tonConnectRef.current.restoreConnection();
    }
  });

  // useEffect(() => {
  //   console.log('expandViewport', expandViewport.isAvailable());
  //   if (requestFullscreen.isAvailable()) {
  //     requestFullscreen();
  //   }
  // }, [expandViewport]);

  // useEffect(() => {
  //   // makeStick();
  // }, []);

  return (
    <TonConnectUIProvider
      manifestUrl="https://tony.it.com/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: appConfig.tgRedirectUrl,
      }}
    >
      <AppRoot
        appearance={'dark'}
        platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
      >
        {children}
      </AppRoot>
    </TonConnectUIProvider>
  );
};

export function TelegramProvider(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount();

  return didMount ? <Root {...props} /> : <div className="root__loading">Loading</div>;
}
