'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { Navigation } from '@/modules/core';
import { TabName } from '@/lib/types';
import { retrieveLaunchParams, viewport } from '@telegram-apps/sdk-react';
import { useTheme as useNextTheme } from 'next-themes';
interface AppLayoutProps {
  children: ReactNode;
  activeTab: TabName;
}

const pagesWithPurpleLayout = ['airdrop', 'invites', 'shack'];

const starsMovePercent = 10;

export function AppLayout({ children, activeTab }: AppLayoutProps) {
  const isPurpleLayout = pagesWithPurpleLayout.includes(activeTab);
  const { setTheme } = useNextTheme();
  const [bgTransform, setBgTransform] = useState('translateX(0)');
  const [isInitialized, setIsInitialized] = useState(false);

  // Handle theme
  useEffect(() => {
    if (isPurpleLayout) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [activeTab, isPurpleLayout, setTheme]);

  // Handle viewport setup
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
      setIsInitialized(true);
    })();
  }, [isPurpleLayout]);

  // Handle background animation
  useEffect(() => {
    if (!isInitialized) return;

    const prevTab = localStorage.getItem('prevTab') as TabName | null;
    console.log('Animation check - Previous tab:', prevTab, 'Current tab:', activeTab);

    if (prevTab && isPurpleLayout && pagesWithPurpleLayout.includes(prevTab)) {
      if (prevTab === 'airdrop' && activeTab === 'invites') {
        console.log('Moving bg LEFT');
        setBgTransform(`translateX(-${starsMovePercent}%)`);
      } else if (prevTab === 'invites' && activeTab === 'airdrop') {
        console.log('Moving bg RIGHT');
        setBgTransform(`translateX(${starsMovePercent}%)`);
      } else {
        console.log('Resetting bg position - different tabs');
        setBgTransform('translateX(0)');
      }
    } else {
      console.log('Resetting bg position - initial load');
      setBgTransform('translateX(0)');
    }

    // Store current tab for next navigation
    localStorage.setItem('prevTab', activeTab);
  }, [activeTab, isPurpleLayout, isInitialized]);

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
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className={`absolute inset-0 w-[140%] h-[140%] left-[-${starsMovePercent}%] top-[-${starsMovePercent}%]`}
            style={{
              backgroundImage: 'url(/stars_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: bgTransform,
              transition: 'transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          />
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
