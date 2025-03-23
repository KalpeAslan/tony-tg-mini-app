'use client';

import { ReactNode, useEffect } from 'react';
import { Navigation } from '@/modules/core';
import { TabName } from '@/lib/types';
import { retrieveLaunchParams, viewport } from '@telegram-apps/sdk-react';
import { useTheme as useNextTheme } from 'next-themes';
interface AppLayoutProps {
  children: ReactNode;
  activeTab: TabName;
}

const pagesWithPurpleLayout = ['airdrop', 'invites', 'shack'];

export function AppLayout({ children, activeTab }: AppLayoutProps) {
  const isPurpleLayout = pagesWithPurpleLayout.includes(activeTab);
  const { setTheme } = useNextTheme();

  useEffect(() => {
    (async () => {
      if (viewport.mount.isAvailable()) {
        try {
          await viewport.mount();
          viewport.expand();
        } catch (error) {
          console.error('Error mounting viewport:', error);
        }
      }

      try {
        await viewport.requestFullscreen();
      } catch (error) {
        console.error('Error requesting fullscreen:', error);
      }
      makeStick(isPurpleLayout);
    })();
  }, []);

  useEffect(() => {
    if (isPurpleLayout) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [activeTab]);

  return (
    <div id="wrap" className="w-full h-full">
      <div
        data-testid="app-layout"
        id="content"
        className="w-full z-10 h-full max-w-screen overflow-x-hidden relative flex flex-col items-center justify-between px-3"
      >
        {/* Main content */}
        <div className="w-full flex items-center justify-center h-full">{children}</div>

        {/* Bottom navigation */}
        <div className="w-full min-h-[var(--navigation-height)] relative pb-4">
          <div className="fixed bottom-5 left-0 right-0">
            <Navigation activeTab={activeTab} className="" />
          </div>
        </div>
      </div>
      {isPurpleLayout && (
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.5,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const makeStick = (isPurple: boolean) => {
  const lp = retrieveLaunchParams();

  // Some versions of Telegram don't need the classes above.
  if (['macos', 'tdesktop', 'weba', 'web', 'webk'].includes(lp.platform)) {
    // return;
  }

  document.body.classList.add('mobile-body');
  const wrapElement = document.getElementById('wrap');
  if (wrapElement) {
    wrapElement.classList.add('mobile-wrap');
    if (isPurple) {
      wrapElement.classList.add('content_purple');
    } else {
      wrapElement.classList.add('content_yellow');
    }
  }

  const contentElement = document.getElementById('content');
  if (contentElement) {
    contentElement.classList.add('mobilec-content');
  }
};
