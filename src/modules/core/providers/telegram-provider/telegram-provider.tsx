'use client';

import { FC, type PropsWithChildren, useEffect, useRef } from 'react';
import { useLaunchParams, expandViewport, requestFullscreen } from '@telegram-apps/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { init } from './init';
import { useTelegramMock } from './use-telegram-mock';
import { useClientOnce } from '@/hooks/use-client-once';
import { useDidMount } from '@/hooks/use-did-mount';
import TonConnect from '@tonconnect/sdk';
import { appConfig } from '@/configs/app.config';

const Root: FC<PropsWithChildren> = ({ children }) => {
  const isDev = process.env.NODE_ENV === 'development';
  const tonConnectRef = useRef<TonConnect | null>(null);

  console.log('isDev', isDev);
  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === 'debug';

  // Initialize the library.
  useClientOnce(() => {
    init(debug);

    // Initialize TonConnect
    if (!tonConnectRef.current) {
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
