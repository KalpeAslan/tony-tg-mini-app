'use client';

import React, { useState } from 'react';
import { CustomSwiperDots } from './custom-swiper-dots';
import { SwiperDotSlider } from './swiper-dot-slider';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Example images (replace with your actual images)
const EXAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
];

export function SwiperDotsExample() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <h2 className="text-2xl font-bold">Swiper Dot Slider Examples</h2>

      <Tabs defaultValue="basic">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Basic Swiper</TabsTrigger>
          <TabsTrigger value="custom">Custom Dots</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-4">
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Basic Swiper with Default Dots</h3>
            <SwiperDotSlider slides={EXAMPLE_IMAGES} className="rounded-lg shadow-md" />

            <h3 className="text-lg font-medium">With Autoplay and Custom Dot Colors</h3>
            <SwiperDotSlider
              slides={EXAMPLE_IMAGES}
              autoplay={true}
              autoplayDelay={5000}
              className="rounded-lg shadow-md"
              paginationStyle={{
                bulletColor: '#cbd5e1',
                activeBulletColor: '#3b82f6',
                bulletSize: 10,
                bulletSpacing: 10,
              }}
            />

            <h3 className="text-lg font-medium">With Fade Effect</h3>
            <SwiperDotSlider
              slides={EXAMPLE_IMAGES}
              useFade={true}
              className="rounded-lg shadow-md"
              paginationStyle={{
                bulletColor: '#cbd5e1',
                activeBulletColor: '#10b981',
                bulletSize: 8,
                bulletSpacing: 8,
              }}
            />
          </div>
        </TabsContent>

        <TabsContent value="custom" className="mt-4">
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Circle Dots with Scale Animation</h3>
            <CustomSwiperDots
              slides={EXAMPLE_IMAGES}
              className="rounded-lg shadow-md"
              dotShape="circle"
              dotAnimation="scale"
              dotSize={8}
              activeDotSize={12}
              dotColor="#cbd5e1"
              activeDotColor="#3b82f6"
            />

            <h3 className="text-lg font-medium">Pill Dots with Slide Animation</h3>
            <CustomSwiperDots
              slides={EXAMPLE_IMAGES}
              className="rounded-lg shadow-md"
              dotShape="pill"
              dotAnimation="slide"
              dotSize={8}
              activeDotSize={8}
              dotColor="#cbd5e1"
              activeDotColor="#ec4899"
              autoplay={true}
            />

            <h3 className="text-lg font-medium">Line Dots</h3>
            <CustomSwiperDots
              slides={EXAMPLE_IMAGES}
              className="rounded-lg shadow-md"
              dotShape="line"
              dotAnimation="slide"
              dotSize={6}
              activeDotSize={6}
              dotColor="#cbd5e1"
              activeDotColor="#f59e0b"
            />

            <h3 className="text-lg font-medium">Square Dots with Pulse Animation</h3>
            <CustomSwiperDots
              slides={EXAMPLE_IMAGES}
              className="rounded-lg shadow-md"
              dotShape="square"
              dotAnimation="pulse"
              dotSize={8}
              activeDotSize={8}
              dotColor="#cbd5e1"
              activeDotColor="#8b5cf6"
              useFade={true}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
