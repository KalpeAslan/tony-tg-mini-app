'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { Navigation } from '@/modules/core';
import { EPages } from '@/lib/types';
import { viewport } from '@telegram-apps/sdk-react';
import { useTheme as useNextTheme } from 'next-themes';
import { makeStick, handleBgColor } from './utils';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const pagesWithPurpleLayout: EPages[] = [EPages.Airdrop, EPages.Invites, EPages.Shack];
const pagesWithStars: EPages[] = [EPages.Airdrop, EPages.Invites];

const starsMovePercent = 10;

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { setTheme } = useNextTheme();
  const [bgTransform, setBgTransform] = useState('translateX(0)');
  const [isInitialized, setIsInitialized] = useState(false);
  const [showStars, setShowStars] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [content, setContent] = useState(children);

  const activeTab = usePathname() as EPages;
  console.log('activeTab', activeTab);

  const isPurpleLayout = pagesWithPurpleLayout.includes(activeTab);
  const isStarsPage = pagesWithStars.includes(activeTab);

  // Handle content change on route change
  useEffect(() => {
    // Only trigger transition if initialized
    if (isInitialized) {
      setIsPageTransitioning(true);

      // Delay setting the new content to ensure previous content fades out first
      const timer = setTimeout(() => {
        setContent(children);
        setIsPageTransitioning(false);
      }, 300); // Ensure this is longer than the exit animation

      return () => clearTimeout(timer);
    } else {
      setContent(children);
    }
  }, [children, isInitialized]);

  // Handle viewport setup
  useEffect(() => {
    handleViewport(() => {
      makeStick(isPurpleLayout);
      setIsInitialized(true);
      if (!isStarsPage) {
        setShowStars(false);
      }
    });
  }, []);

  useEffect(() => {
    console.log('isPurpleLayout', isPurpleLayout);
    handleBgColor(isPurpleLayout);
    handleBackgroundAnimation();
  }, [activeTab, isInitialized, isPurpleLayout]);

  // Handle background animation
  const handleBackgroundAnimation = () => {
    console.log('isPurpleLayout', isPurpleLayout);
    if (isPurpleLayout) {
      setTheme('dark');
      console.log('setting theme to dark');
    } else {
      console.log('setting theme to light');
      setTheme('light');
    }

    if (!isInitialized) return;

    const prevTab = localStorage.getItem('prevTab') as EPages | null;

    const isLeavingFromPurpleToPurple =
      prevTab && isPurpleLayout && pagesWithPurpleLayout.includes(prevTab);

    if (isLeavingFromPurpleToPurple) {
      const isMovingLeft = prevTab === EPages.Airdrop && activeTab === EPages.Invites;
      const isMovingRight = prevTab === EPages.Invites && activeTab === EPages.Airdrop;

      if (isMovingLeft) {
        console.log('Moving bg LEFT');
        setBgTransform(`translateX(-${starsMovePercent}%)`);
      } else if (isMovingRight) {
        console.log('Moving bg RIGHT');
        setBgTransform(`translateX(${starsMovePercent}%)`);
      } else {
        // Resetting bg position - different tabs
        setBgTransform('translateX(0)');
      }
    } else {
      console.log('Resetting bg position - initial load');
      setBgTransform('translateX(0)');
    }

    const leaveFromStarsToNonStarsPage =
      prevTab && pagesWithStars.includes(prevTab) && !pagesWithStars.includes(activeTab);

    if (leaveFromStarsToNonStarsPage) {
      setBgTransform('translateX(0) scale(15)');
      setTimeout(() => {
        setShowStars(false);
      }, 1000);
    }

    const comeFromNonStarsToStarsPage =
      prevTab && !pagesWithStars.includes(prevTab) && pagesWithStars.includes(activeTab);

    if (comeFromNonStarsToStarsPage) {
      setShowStars(true);
      // setBgTransform('translateX(0) scale(15)');
      setTimeout(() => {
        // setBgTransform('translateX(0) scale(1)');
      }, 0);
    }

    // Store current tab for next navigation
    localStorage.setItem('prevTab', activeTab);
  };

  return (
    <div id="wrap" className="w-full h-full">
      <div
        data-testid="app-layout"
        id="content"
        className="w-full z-10 h-full max-w-screen overflow-x-hidden relative flex flex-col items-center justify-between px-3"
      >
        {/* Main content with Framer Motion */}
        <motion.div
          className="flex-1 w-full"
          animate={{ opacity: isPageTransitioning ? 0 : 1 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {content}
        </motion.div>

        {/* Bottom navigation */}
        <div className="w-full min-h-[var(--navigation-height)] relative pb-4">
          <div className="fixed bottom-5 left-0 right-0">
            <Navigation activeTab={activeTab} className="" />
          </div>
        </div>
      </div>
      {showStars && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className={`absolute inset-0 w-[140%] h-[140%] left-[-${starsMovePercent}%] top-[-${starsMovePercent}%] bg-cover bg-center bg-no-repeat`}
            style={{
              backgroundImage: 'url(/stars_bg.png)',
              transform: bgTransform,
              opacity: showStars ? 1 : 0,
              transition:
                'transform 1s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          />
        </div>
      )}
    </div>
  );
};

const handleViewport = async (cb: () => void) => {
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
  cb();
};
