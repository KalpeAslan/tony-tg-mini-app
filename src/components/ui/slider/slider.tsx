'use client';

import { ReactNode } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
  return (
    <div className={`w-full ${className}`}>
      <SwiperComponent
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={autoSlide ? { delay: slideInterval, disableOnInteraction: false } : false}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};
