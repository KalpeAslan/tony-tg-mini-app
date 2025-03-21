'use client';

import { PackItem } from '../components';
import { FullLoader } from '@/components/ui';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PacksLayout } from '../layouts';
import { useQuery } from '@tanstack/react-query';
import { BoostsApi, BostItem } from '@/modules/core';
import { useState } from 'react';

export const PacksPage = () => {
  // Using Tanstack Query to fetch boosts data
  const { data: boostsData, isLoading } = useQuery({
    queryKey: ['boosts'],
    queryFn: BoostsApi.boosts.getAll,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <PacksLayout>
      {/* {isLoading && <FullLoader isVisible={isLoading} />} */}

      {boostsData?.success && (
        <Swiper
          className="w-full max-w-full"
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
        >
          {boostsData.bosts.map((boost: BostItem) => (
            <SwiperSlide key={boost.id}>
              <PackItem data={boost} />
            </SwiperSlide>
          ))}
          <div className="flex justify-center mt-4 mb-6 gap-2">
            {boostsData.bosts.map((_, index) => (
              <button
                key={index}
                className={`w-[6px] h-[6px] rounded-full transition-opacity ${
                  activeIndex === index ? 'bg-white' : 'bg-white opacity-50'
                }`}
                onClick={() => swiperInstance?.slideTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Swiper>
      )}
    </PacksLayout>
  );
};
