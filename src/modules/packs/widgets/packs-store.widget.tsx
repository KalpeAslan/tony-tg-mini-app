import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperClass } from 'swiper/react';
import { useQuery } from '@tanstack/react-query';
import { BoostsApi, BostItem } from '@/modules/core';
import { useState } from 'react';
import { PackItem } from '../components';
import { Sound } from '@/lib/constants';
import { useAudioPlayer } from 'react-use-audio-player';

export function PacksStoreWidget() {
  const { data: boostsData } = useQuery({
    queryKey: ['boosts'],
    queryFn: BoostsApi.boosts.getAll,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const { play } = useAudioPlayer(Sound.CLICK);

  const handleSlideChange = (swiper: SwiperClass) => {
    play();
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
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
              <PackItem boost={boost} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="flex justify-center mt-2 gap-2">
        {boostsData?.bosts.map((_, index) => (
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
    </>
  );
}
