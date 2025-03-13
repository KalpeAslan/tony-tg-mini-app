'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { cn } from '@/lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SwiperDotSliderProps {
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
   * Custom styles for pagination dots
   */
  paginationStyle?: {
    bulletSize?: number;
    bulletColor?: string;
    activeBulletColor?: string;
    bulletSpacing?: number;
  };
  /**
   * Optional callback when slide changes
   */
  onSlideChange?: (index: number) => void;
}

export function SwiperDotSlider({
  slides,
  className,
  autoplay = false,
  autoplayDelay = 3000,
  useFade = false,
  loop = true,
  paginationStyle = {},
  onSlideChange,
}: SwiperDotSliderProps) {
  const {
    bulletSize = 8,
    bulletColor = '#ccc',
    activeBulletColor = '#333',
    bulletSpacing = 8,
  } = paginationStyle;

  // Custom pagination CSS
  const paginationCssVars = {
    '--swiper-pagination-color': activeBulletColor,
    '--swiper-pagination-bullet-inactive-color': bulletColor,
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-size': `${bulletSize}px`,
    '--swiper-pagination-bullet-horizontal-gap': `${bulletSpacing}px`,
  } as React.CSSProperties;

  return (
    <div className={cn('w-full', className)} style={paginationCssVars}>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{
          clickable: true,
        }}
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
        onSlideChange={swiper => onSlideChange?.(swiper.activeIndex)}
        className="w-full"
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
    </div>
  );
}

// Example usage:
// <SwiperDotSlider
//   slides={['image1.jpg', 'image2.jpg']}
//   autoplay={true}
//   paginationStyle={{
//     bulletColor: '#ccc',
//     activeBulletColor: '#0070f3',
//     bulletSize: 10,
//     bulletSpacing: 10
//   }}
// />
