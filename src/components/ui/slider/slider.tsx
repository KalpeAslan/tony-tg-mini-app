'use client';

import { ReactNode, useState, useEffect } from 'react';
import styles from './slider.module.css';

export interface SliderItem {
  id: number | string;
  content: ReactNode;
}

interface SliderProps {
  items: SliderItem[];
  autoSlide?: boolean;
  slideInterval?: number;
  className?: string;
}

export const Slider = ({
  items,
  autoSlide = true,
  slideInterval = 5000,
  className = '',
}: SliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % items.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, items.length, slideInterval]);

  return (
    <div className={`w-full ${className}`}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {items.map(item => (
            <div key={item.id} className={styles.slide}>
              {item.content}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dotsContainer}>
        {items.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
