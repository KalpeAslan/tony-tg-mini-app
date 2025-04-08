'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { Navigation, SoundFloatingButton } from '@/modules/core';
import { EPages } from '@/lib/types';
import { viewport } from '@telegram-apps/sdk-react';
import { useTheme as useNextTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { makeStick, handleBgColor } from './utils';
import { usePathname } from 'next/navigation';
import { BackgroundMusic } from '@/lib/components';
import { useSound } from '@/lib/hooks/useSound';
import { Sound, UIConstant } from '@/lib/constants';
import styles from './app-layout.module.css';
import { useMediaQuery } from 'usehooks-ts';

const pagesWithPurpleLayout: EPages[] = [EPages.Airdrop, EPages.Invites, EPages.Shack];
const pagesWithStars: EPages[] = [EPages.Airdrop, EPages.Invites];

const starsMovePercent = 10;

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { setTheme } = useNextTheme();
  const [bgTransform, setBgTransform] = useState('translateX(0)');
  const [isInitialized, setIsInitialized] = useState(false);
  const [showStars, setShowStars] = useState(true);
  const [showColorTransition, setShowColorTransition] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<
    'purple-to-yellow' | 'yellow-to-purple' | null
  >(null);
  const [showShackTransition, setShowShackTransition] = useState(false);
  const { play: playShackDoorClose } = useSound(Sound.SHACK_DOOR_CLOSE);

  const activeTab = usePathname() as EPages;
  console.log('activeTab', activeTab);

  const isPurpleLayout = pagesWithPurpleLayout.includes(activeTab);
  const isStarsPage = pagesWithStars.includes(activeTab);
  const isShackPage = activeTab === EPages.Shack;

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

    // Handle shack page transition
    if (prevTab) {
      const wasShackPage = prevTab === EPages.Shack;

      if (!wasShackPage && isShackPage) {
        setShowShackTransition(true);
        playShackDoorClose();
        // setTimeout(() => setShowShackTransition(false), 800);
      } else if (wasShackPage && !isShackPage) {
        setShowShackTransition(true);
        playShackDoorClose();
        setTimeout(() => setShowShackTransition(false), 800);
      }
    }

    // Handle color transition animation
    if (prevTab) {
      const wasPurpleLayout = pagesWithPurpleLayout.includes(prevTab as EPages);

      if (wasPurpleLayout && !isPurpleLayout) {
        setTransitionDirection('purple-to-yellow');
        setShowColorTransition(true);
        setTimeout(() => setShowColorTransition(false), 500);
      } else if (!wasPurpleLayout && isPurpleLayout) {
        setTransitionDirection('yellow-to-purple');
        setShowColorTransition(true);
        setTimeout(() => setShowColorTransition(false), 500);
      }
    }

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
      setTimeout(() => {}, 0);
    }

    localStorage.setItem('prevTab', activeTab);
  };

  const renderNavigation = () => {
    const matches = useMediaQuery(`(max-width: ${UIConstant.MAX_MOBILE_WIDTH}px)`);

    if (!matches)
      return (
        <div className={`min-h-[var(--navigation-height)] fixed bottom-0 z-[var(--navigation-z-index)]`} style={{
          width: 360
        }}>
          <Navigation activeTab={activeTab} className="" />
        </div>
      );

    return (
      <div className="w-full min-h-[var(--navigation-height)] relative pb-4 z-[var(--navigation-z-index)]">
        <div className="fixed bottom-5 left-0 right-0 px-3">
          <Navigation activeTab={activeTab} className="" />
        </div>
      </div>
    );
  };

  return (
    <div id="wrap" className="w-full h-full relative">
      {/* Background Stars Layer - Lowest z-index */}
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

      {/* Main Content Layer - Middle z-index */}
      <div
        data-testid="app-layout"
        id="content"
        className="w-full z-10 h-full max-w-screen overflow-x-hidden relative flex flex-col items-center justify-between px-3"
      >
        {/* <BackgroundMusic /> */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="w-full flex items-center justify-center h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <SoundFloatingButton />
        {renderNavigation()}

        {/* Transition Layers - Highest z-index */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Color Transition */}
          {showColorTransition && (
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                transitionDirection === 'purple-to-yellow'
                  ? 'bg-gradient-to-b from-purple-900 to-yellow-500'
                  : 'bg-gradient-to-b from-yellow-500 to-purple-900'
              }`}
              style={{
                animation:
                  transitionDirection === 'purple-to-yellow'
                    ? 'fadeOutToYellow 0.5s forwards'
                    : 'fadeOutToPurple 0.5s forwards',
              }}
            />
          )}

          {/* Shack Transition */}
          <AnimatePresence>
            {showShackTransition && (
              <>
                <motion.div
                  className={styles.shackTop}
                  initial={{ y: '-100%' }}
                  animate={{ y: isShackPage ? '0%' : '-100%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                <motion.div
                  className={styles.shackBottom}
                  initial={{ y: '100%' }}
                  animate={{ y: isShackPage ? '0%' : '100%' }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
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
