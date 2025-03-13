'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface CustomSwiperDotsProps {
  /**
   * Array of image URLs or React elements to display in the slider
   */
  slides: (string | React.ReactNode)[];
  /**
   * Optional className for the container
   */
  className?: string;
  /**
   * Whether to enable autoplay
   * @default false
   */
  autoplay?: boolean;
  /**
   * Autoplay delay in milliseconds
   * @default 3000
   */
  autoplayDelay?: number;
  /**
   * Whether to use fade transition effect
   * @default false
   */
  useFade?: boolean;
  /**
   * Whether to loop the slider
   * @default true
   */
  loop?: boolean;
  /**
   * Shape of the dots
   * @default "circle"
   */
  dotShape?: 'circle' | 'square' | 'pill' | 'line';
  /**
   * Size of each dot in pixels
   * @default 8
   */
  dotSize?: number;
  /**
   * Size of the active dot in pixels
   * @default 10
   */
  activeDotSize?: number;
  /**
   * Gap between dots in pixels
   * @default 8
   */
  dotGap?: number;
  /**
   * Color for inactive dots
   * @default "#ccc"
   */
  dotColor?: string;
  /**
   * Color for the active dot
   * @default "#333"
   */
  activeDotColor?: string;
  /**
   * Animation style for the active dot
   * @default "scale"
   */
  dotAnimation?: 'scale' | 'pulse' | 'slide' | 'none';
  /**
   * Optional callback when slide changes
   */
  onSlideChange?: (index: number) => void;
}

export function CustomSwiperDots({
  slides,
  className,
  autoplay = false,
  autoplayDelay = 3000,
  useFade = false,
  loop = true,
  dotShape = 'circle',
  dotSize = 8,
  activeDotSize = 10,
  dotGap = 8,
  dotColor = '#ccc',
  activeDotColor = '#333',
  dotAnimation = 'scale',
  onSlideChange,
}: CustomSwiperDotsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(slides.length);
  const swiperRef = useRef<SwiperType | null>(null);

  // Handle swiper initialization
  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setTotalSlides(swiper.slides.length - (loop ? 2 : 0)); // Adjust for loop duplicated slides
  };

  // Handle slide change
  const handleSlideChange = (swiper: SwiperType) => {
    // Get the real index (accounting for loop mode)
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
    onSlideChange?.(realIndex);
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(loop ? index + 1 : index);
    }
  };

  // Get border radius based on shape
  const getBorderRadius = () => {
    switch (dotShape) {
      case 'square':
        return '2px';
      case 'pill':
        return '999px';
      case 'line':
        return '0px';
      case 'circle':
      default:
        return '50%';
    }
  };

  // Get dot dimensions based on shape
  const getDotDimensions = (isActive: boolean) => {
    const size = isActive ? activeDotSize : dotSize;

    if (dotShape === 'line') {
      return {
        width: isActive ? `${size * 3}px` : `${size * 2}px`,
        height: `${Math.max(2, size / 2)}px`,
      };
    }

    if (dotShape === 'pill') {
      return {
        width: isActive ? `${size * 2}px` : `${size}px`,
        height: `${size}px`,
      };
    }

    return {
      width: `${size}px`,
      height: `${size}px`,
    };
  };

  // Get animation variants
  const getAnimationVariants = () => {
    switch (dotAnimation) {
      case 'pulse':
        return {
          inactive: {
            scale: 1,
            opacity: 0.7,
            backgroundColor: dotColor,
          },
          active: {
            scale: [1, 1.2, 1],
            opacity: 1,
            backgroundColor: activeDotColor,
            transition: {
              repeat: Infinity,
              repeatType: 'reverse' as const,
              duration: 1.5,
            },
          },
        };
      case 'slide':
        return {
          inactive: {
            width: getDotDimensions(false).width,
            opacity: 0.7,
            backgroundColor: dotColor,
          },
          active: {
            width: getDotDimensions(true).width,
            opacity: 1,
            backgroundColor: activeDotColor,
          },
        };
      case 'scale':
        return {
          inactive: {
            scale: 1,
            opacity: 0.7,
            backgroundColor: dotColor,
          },
          active: {
            scale: activeDotSize / dotSize,
            opacity: 1,
            backgroundColor: activeDotColor,
          },
        };
      case 'none':
      default:
        return {
          inactive: {
            opacity: 0.7,
            backgroundColor: dotColor,
          },
          active: {
            opacity: 1,
            backgroundColor: activeDotColor,
          },
        };
    }
  };

  return (
    <div className={cn('relative w-full', className)}>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay, Navigation]}
        effect={useFade ? 'fade' : undefined}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
              }
            : false
        }
        loop={loop}
        onInit={handleSwiperInit}
        onSlideChange={handleSlideChange}
        className="w-full"
        pagination={false} // Disable default pagination
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {typeof slide === 'string' ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              slide
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom dots */}
      <div
        className="absolute bottom-4 left-0 right-0 flex items-center justify-center"
        style={{ gap: `${dotGap}px` }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = index === activeIndex;
          const dimensions = getDotDimensions(isActive);

          return (
            <motion.button
              key={index}
              type="button"
              onClick={() => handleDotClick(index)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{
                ...dimensions,
                borderRadius: getBorderRadius(),
              }}
              initial="inactive"
              animate={isActive ? 'active' : 'inactive'}
              variants={getAnimationVariants()}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? 'true' : 'false'}
            />
          );
        })}
      </div>
    </div>
  );
}
