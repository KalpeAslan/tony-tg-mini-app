'use client';

import { Task } from '@/components/task';
import { Task as TaskType } from '@/modules/invites/models';
import { useState, useEffect } from 'react';
import styles from './promo-section.module.css';

const tasks: TaskType[] = [
  {
    id: 1,
    title: 'Newbies Luck',
    description: 'A pack for little cry babies. A small chance for them to make it lol',
    img: '/invites/with-coin.png',
  },
  {
    id: 2,
    title: 'Invite telegram premium dudes',
    description: 'Earn 33 Tony Coins by inviting friends with Telegram Premium',
    img: '/invites/on-rocket.png',
  },
];

export const PromoSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % tasks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {tasks.map(task => (
            <div key={task.id} className={styles.slide}>
              <Task key={task.title} {...task} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dotsContainer}>
        {tasks.map((_, index) => (
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
